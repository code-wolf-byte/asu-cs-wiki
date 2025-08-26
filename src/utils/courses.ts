import coursesRawData from '../data/courses.json';

interface Course {
  name: string;
  credits?: string;
  offeredIn?: string;
  prerequisites: string[];
  prerequisitesFor?: string[];
  link: string;
}

interface CourseCategory {
  [key: string]: Course[];
}

type CoursesData = {
  termLayout: any;
  spring6OrGroup: string[];
  catalog: CourseCategory;
};

/**
 * Get course data by course code from raw data
 */
export function getCourseData(courseCode: string): Course | null {
  for (const [category, courses] of Object.entries(coursesRawData.catalog)) {
    const course = courses.find(c => c.name.startsWith(courseCode));
    if (course) return course;
  }
  return null;
}

/**
 * Augments the courses data by calculating prerequisitesFor from prerequisites
 */
export function getAugmentedCoursesData(): CoursesData {
  // Deep clone the data to avoid mutation
  const coursesData: CoursesData = JSON.parse(JSON.stringify(coursesRawData));
  
  // Build a map of course code to course object for easy lookup
  const courseMap = new Map<string, Course>();
  
  // First pass: collect all courses
  Object.entries(coursesData.catalog).forEach(([category, courses]) => {
    courses.forEach(course => {
      const courseCode = course.name.split(' - ')[0];
      courseMap.set(courseCode, course);
    });
  });
  
  // Second pass: calculate prerequisitesFor
  Object.entries(coursesData.catalog).forEach(([category, courses]) => {
    courses.forEach(course => {
      const courseCode = course.name.split(' - ')[0];
      
      // Initialize prerequisitesFor if not exists
      if (!course.prerequisitesFor) {
        course.prerequisitesFor = [];
      }
      
      // For each prerequisite of this course, add this course to its prerequisitesFor
      if (course.prerequisites && course.prerequisites.length > 0) {
        course.prerequisites.forEach(prereq => {
          const prereqCourse = courseMap.get(prereq);
          if (prereqCourse) {
            if (!prereqCourse.prerequisitesFor) {
              prereqCourse.prerequisitesFor = [];
            }
            if (!prereqCourse.prerequisitesFor.includes(courseCode)) {
              prereqCourse.prerequisitesFor.push(courseCode);
            }
          }
        });
      }
    });
  });
  
  return coursesData;
}