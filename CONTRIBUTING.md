# Contributing to ASU CS Wiki

🔱 **Welcome Sun Devils!** This is the ASU CS Wiki. This project helps ASU Computer Science students navigate their academic journey with course information, career resources, and community guidance.

This wiki is maintained by [SoDA (Software Developers Association)](https://thesoda.io/) and is built with ❤️ by the ASU CS community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Quick Edit (Recommended for Small Changes)](#quick-edit-recommended-for-small-changes)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Content Guidelines](#content-guidelines)
- [Technical Guidelines](#technical-guidelines)
- [Submitting Changes](#submitting-changes)
- [Review Process](#review-process)
- [Community and Support](#community-and-support)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming, inclusive, and respectful environment for all ASU CS students. Please be kind, constructive, and helpful in all interactions.

## 🤝 How Can I Contribute?

### Content Contributions
- **Course Information**: Add course reviews, tips, prerequisites updates, professor insights
- **Career Resources**: Share internship experiences, interview tips, career guidance
- **Campus Resources**: Update information about labs, study spaces, academic support
- **Guides**: Create or improve guides for academic success, research opportunities, clubs

### Technical Contributions
- **Bug Fixes**: Fix broken links, formatting issues, or functionality problems
- **Feature Enhancements**: Improve the interactive course map, search functionality, or UI/UX
- **Performance**: Optimize site speed, accessibility, or mobile experience

### Community Contributions
- **Issue Reporting**: Help identify bugs, outdated content, or missing information
- **Testing**: Test new features and provide feedback
- **Feedback**: Suggest improvements or new content areas

## ⚡ Quick Edit (Recommended for Small Changes)

For small content changes, you can edit directly on GitHub:

1. **Navigate** to any page on [wiki.thesoda.io](https://wiki.thesoda.io)
2. **Click** the "Edit page" link (appears on every page)
3. **Make** your changes in the GitHub web editor
4. **Scroll** down and add a descriptive commit message
5. **Select** "Create a new branch for this commit and start a pull request"
6. **Click** "Propose changes"

This method is perfect for:
- Fixing typos or grammar
- Updating course information
- Adding small sections to existing content
- Correcting factual information

## 🛠 Development Setup

For larger changes or technical contributions, set up the project locally:

### Prerequisites
- **Node.js** (version 18 or higher)
- **pnpm** (preferred package manager)
- **Git**

### Installation

1. **Fork** the repository on GitHub
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/asu-cs-wiki.git
   cd asu-cs-wiki
   ```

3. **Install** dependencies:
   ```bash
   pnpm install
   ```

4. **Start** the development server:
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3030`

### Project Structure
```
asu-cs-wiki/
├── src/
│   ├── content/
│   │   └── docs/           # All wiki content (Markdown/MDX)
│   │       ├── Courses/    # Individual course pages
│   │       └── Guides/     # Career, campus, and other guides
│   ├── data/
│   │   └── courses.json    # Course data and prerequisites
│   ├── assets/             # Images and media files
│   └── pages/             # Custom Astro pages
├── public/                # Static files (favicons, etc.)
└── astro.config.mjs       # Site configuration
```

## 🔄 Making Changes

### Branch Naming
Create descriptive branch names:
- `content/add-cse-412-review` - for content additions
- `fix/broken-course-links` - for bug fixes
- `feature/course-search` - for new features
- `docs/update-contributing` - for documentation

### Commit Messages
Write clear, descriptive commit messages:
- ✅ `Add CSE 412 course review and tips`
- ✅ `Fix broken links in career resources page`
- ✅ `Update prerequisites for CSE 310`
- ❌ `updated stuff`
- ❌ `fix`

## 📝 Content Guidelines

### Course Content
When adding course information:
- **Be objective**: Focus on factual information rather than personal opinions
- **Be specific**: Include concrete examples, tips, and resources
- **Stay current**: Verify information is up-to-date for current semesters
- **Structure consistently**: Use the existing course page format

### Writing Style
- **Clear and concise**: Write for fellow students who may be new to the topic
- **Inclusive language**: Use gender-neutral and accessible language
- **Helpful tone**: Be encouraging and supportive
- **Proper formatting**: Use Markdown formatting consistently

### Content Requirements
- All course information should be verified and current
- Links should be working and relevant
- Images should include alt text for accessibility
- Sources should be credible (official ASU sites, verified student experiences)

## 🔧 Technical Guidelines

### File Naming
- Use lowercase with hyphens: `cse-310.md`, `career-resources.md`
- Match existing naming patterns in each directory
- Keep names descriptive but concise

### Markdown/MDX
- Use proper frontmatter for all content files:
  ```yaml
  ---
  title: Your Page Title
  description: A brief description of the page content
  ---
  ```
- Follow existing formatting patterns
- Use appropriate heading levels (start with `##` in content)
- Include table of contents for longer pages

### Course Data Updates
When updating `src/data/courses.json`:
- Verify prerequisite information with official ASU catalogs
- Maintain the existing JSON structure
- Test that course links work correctly
- Ensure the interactive course map still functions

### Images and Assets
- Optimize images for web (WebP format preferred)
- Place images in `src/assets/`
- Use descriptive filenames
- Include alt text for accessibility

## 📤 Submitting Changes

### Pull Request Process
1. **Sync** your fork with the main repository
2. **Create** a new branch from `main`
3. **Make** your changes following the guidelines above
4. **Test** your changes locally (`pnpm dev`)
5. **Commit** with descriptive messages
6. **Push** to your fork
7. **Open** a pull request with:
   - Descriptive title
   - Detailed description of changes
   - Screenshots (for visual changes)
   - Testing steps (if applicable)

### Pull Request Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Content update (course info, guides, resources)
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Verified all links work
- [ ] Checked mobile responsiveness (if applicable)

## Screenshots (if applicable)
Add screenshots here

## Additional Notes
Any additional information or context
```

## 🔍 Review Process

### What to Expect
- **Initial Response**: Within 1-2 days
- **Review Time**: 2-7 days depending on complexity
- **Feedback**: Constructive comments and suggestions
- **Collaboration**: Work together to refine the contribution

### Review Criteria
- **Accuracy**: Information is correct and up-to-date
- **Completeness**: Changes are thorough and well-explained
- **Consistency**: Follows existing patterns and guidelines
- **Quality**: Content is well-written and helpful
- **Technical**: Code changes don't break existing functionality

### Automated Checks
Pull requests automatically run:
- **Build verification**: Ensures the site builds successfully
- **Link checking**: Verifies internal and external links
- **Deployment preview**: Generates a preview of your changes

## 💬 Community and Support

### Getting Help
- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Discord**: Join the [SoDA Discord](https://discord.gg/g6Nu8Fj4G6) for real-time chat
- **Email**: Contact the maintainers through SoDA

### Stay Connected
- **Website**: [thesoda.io](https://thesoda.io/)
- **Instagram**: [@soda.asu](https://www.instagram.com/soda.asu/)
- **LinkedIn**: [SoDA](https://www.linkedin.com/company/thesoda/)

### Acknowledgments
All contributors are recognized in our community and on our website. Thank you for helping make ASU CS education more accessible and successful for everyone!

## ❓ Frequently Asked Questions

**Q: I'm new to GitHub/Git. How do I get started?**
A: Start with the [Quick Edit](#quick-edit-recommended-for-small-changes) method! For larger changes, check out GitHub's [Git Handbook](https://guides.github.com/introduction/git-handbook/).

**Q: How do I know if my course information is accurate?**
A: Cross-reference with the [official ASU catalog](https://catalog.asu.edu/), MyASU, and recent student experiences. When in doubt, ask current students or TAs.

**Q: Can I add information about professors?**
A: Yes, but keep it constructive and factual. Focus on teaching style, course structure, and helpful tips rather than personal opinions.

**Q: What if I disagree with existing content?**
A: Open an issue to discuss it! We value different perspectives and want the most helpful, accurate information.

**Q: How often is the site updated?**
A: The site automatically updates when changes are merged to the main branch. This typically happens within 5-10 minutes of approval.

---

**Thank you for contributing to the ASU CS Wiki!** 🎉

Your contributions help fellow Sun Devils succeed in their computer science journey. Every improvement, no matter how small, makes a difference in someone's academic experience.

*Questions? Reach out to us through any of the channels listed above. We're here to help!*
