# Editing Guide: How to Update Your Portfolio

This guide explains how to update your portfolio website using the GitHub web editor. **No coding experience needed!**

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Editing Content via GitHub](#editing-content-via-github)
3. [Specific Edits](#specific-edits)
4. [Adding New Items](#adding-new-items)
5. [Replacing Your CV](#replacing-your-cv)
6. [Changing Your Profile Image](#changing-your-profile-image)
7. [Common Mistakes & How to Fix](#common-mistakes--how-to-fix)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Step 1: Open GitHub

1. Go to https://github.com
2. Sign in to your account
3. Find your portfolio repository (it might be named `portfolio` or something similar)
4. Click on the repository name to open it

### Step 2: Understand the File Structure

Your repository contains these files (you'll mainly edit `index.html`):

```
portfolio/
├── index.html              ← Main file with all content
├── css/
│   └── style.css           ← Design (don't edit this)
├── js/
│   └── script.js           ← Features (don't edit this)
└── assets/
    └── images/
    └── documents/
        └── Muhammad_Anas_Khan_CV.pdf
```

**Most edits will be in `index.html`**

---

## Editing Content via GitHub

### The Basic Workflow

Every time you want to edit:

1. **Open** the file in GitHub
2. **Find** the section you want to edit
3. **Make changes** directly in the editor
4. **Preview** your changes
5. **Commit** (save) the changes
6. **Wait** for GitHub Pages to update
7. **Check** your live website

### Step-by-Step: Edit Text in Index.html

#### Step 1: Navigate to index.html

1. On your GitHub repository page, you'll see a file list
2. Click on `index.html` (it's the largest file)
3. You'll see the entire website code

#### Step 2: Find What You Want to Edit

Look for comments in the HTML that say:

```html
<!-- Edit Education Here: Section 1 -->
```

These comments tell you where to make changes. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac) to search for keywords.

#### Step 3: Click the Edit Button

1. Click the **pencil icon (✏️)** in the top right of the file
2. You'll see "You're editing this file" at the top
3. The file is now editable

#### Step 4: Make Your Changes

You can now edit the text directly in the browser.

**Example: Edit Your Name**

Find this section (usually near the top):
```html
<h1>Muhammad Anas Khan</h1>
```

Change `Muhammad Anas Khan` to your name, or keep it as is.

#### Step 5: Commit (Save) Your Changes

After making changes:

1. Scroll down to the bottom of the page
2. You'll see a green "Commit changes" button
3. **Optional**: Add a message describing what you changed (e.g., "Update education dates")
4. Click the green "Commit changes" button
5. Wait 1-2 minutes for GitHub Pages to update
6. Visit your website to see the changes

---

## Specific Edits

### Edit: Your Name

**Find**: Look for `<h1>Muhammad Anas Khan</h1>` in the Hero section

**Change**: Replace with your name

### Edit: Professional Headline

**Find**: Look for `<p class="headline">MPhil Microbiology Student | Emerging Researcher</p>`

**Change**: Keep this or modify to reflect your current role

### Edit: Introduction/Tagline

**Find**: Look for `<p class="tagline">Exploring microbiology...</p>`

**Change**: Update to your personal tagline

### Edit: Email Address

**Find**: Look for `muhammadanaskhan74147@gmail.com` (appears in multiple places)

**Change**: Replace with your email address

**Locations**:
- In the Contact section
- In button links `mailto:`
- In footer

### Edit: LinkedIn URL

**Find**: Look for `https://www.linkedin.com/in/anaskhan74147`

**Change**: Replace with your LinkedIn profile URL

### Edit: Education Section

**Find**: Look for `<!-- Edit Education Here: Section 1 -->` and `<!-- Edit Education Here: Section 2 -->`

**Example**:
```html
<div class="education-card">
    <div class="education-header">
        <h3>MPhil Microbiology</h3>
        <span class="date">2025 – Present</span>
    </div>
    <p class="institution">Institute of Biotechnology and Genetic Engineering</p>
    <p class="location">Agriculture University Peshawar, Peshawar, Pakistan</p>
    <p class="description">Pursuing postgraduate study in microbiology...</p>
</div>
```

**What to Change**:
- `<h3>`: Your degree name
- `<span class="date">`: Start and end dates (use – not -)
- `<p class="institution">`: Your school/university name
- `<p class="location">`: City and country
- `<p class="description">`: 1-2 sentences about your studies

### Edit: Professional Experience

**Find**: Look for `<!-- Edit Experience Here: Section 1 -->` (there are 4)

**Example**:
```html
<div class="experience-card">
    <div class="experience-header">
        <h3>Entrepreneurial Internship</h3>
        <span class="date">August 2024 – October 2024</span>
    </div>
    <p class="organization">Amal Academy</p>
    <p class="location">Lahore, Pakistan</p>
    <p class="description">Engaged in entrepreneurial learning...</p>
</div>
```

**What to Change**:
- `<h3>`: Job title
- `<span class="date">`: Dates (Month Year – Month Year)
- `<p class="organization">`: Company/organization name
- `<p class="location">`: City, country
- `<p class="description">`: What you did and learned

### Edit: Volunteer Experience

**Find**: Look for `<!-- Edit Volunteer Here: Section 1 -->` (there are 4)

**Example**:
```html
<div class="volunteer-card">
    <h3>American Society for Microbiology</h3>
    <p class="role">Student Member</p>
    <p class="location">Peshawar, Pakistan</p>
    <p class="duration">2023 – Present</p>
    <p class="description">Active member supporting...</p>
</div>
```

**What to Change**:
- `<h3>`: Organization name
- `<p class="role">`: Your role
- `<p class="location">`: Location (optional)
- `<p class="duration">`: Years of service
- `<p class="description">`: What you do there

### Edit: Research Projects

**Find**: Look for `<!-- Edit Research Here: Section 1 -->` and `<!-- Edit Research Here: Section 2 -->`

**Example**:
```html
<div class="research-card">
    <h3>Identification and Secondary Metabolites Extraction of <em>Aspergillus niger</em></h3>
    <p class="project-category">Mycology & Natural Products</p>
    <p class="description">Academic research project...</p>
</div>
```

**What to Change**:
- `<h3>`: Project title
- `<em>`: Scientific name (use `<em>` tags for italics)
- `<p class="project-category">`: Type/category of research
- `<p class="description">`: Brief description

**Important**: Keep descriptions general. Don't include details of unpublished research!

### Edit: Awards

**Find**: Look for `<!-- Edit Awards Here: Add/Remove/Update Awards -->`

**Example**:
```html
<div class="award-card">
    <div class="award-year">2024</div>
    <h3>Best Volunteer Award</h3>
    <p class="award-event">Provisional Local Conference of Youth (LCOY) - KPK</p>
</div>
```

**What to Change**:
- `<div class="award-year">`: Year of award
- `<h3>`: Award name
- `<p class="award-event">`: Organization/event name

To add a new award, copy one of these cards and paste it below the others, then update the information.

### Edit: Skills

**Find**: Look for sections with `<div class="skill-category">`

**Example**:
```html
<div class="skill-category">
    <h3>Laboratory & Technical</h3>
    <div class="skill-tags">
        <span class="skill-tag">Lab Management</span>
        <span class="skill-tag">Biosafety Protocols</span>
        <!-- Add more skills here -->
    </div>
</div>
```

**What to Change**:
- Each `<span class="skill-tag">` is one skill
- Replace with your actual skills
- Keep the tags structure the same

### Edit: Training & Activities

**Find**: Look for `<!-- Edit Activities Here: Add/Remove/Update -->`

**Example**:
```html
<div class="activity-item">
    <h3>National Local Conference of Youth (LCOY)</h3>
    <p class="year">2024</p>
    <p class="description">Participation in national youth conference...</p>
</div>
```

**What to Change**:
- `<h3>`: Activity/conference name
- `<p class="year">`: Year
- `<p class="description">`: Brief description

---

## Adding New Items

### Add a New Award

1. Find the awards section (around line 600+)
2. Look for an existing award card
3. Copy the entire `<div class="award-card">` block
4. Paste it right after the last award card
5. Update the year, name, and event

**Example**:
```html
<div class="award-card">
    <div class="award-year">2025</div>
    <h3>Your New Award Name</h3>
    <p class="award-event">Organization or Event Name</p>
</div>
```

### Add a New Experience

1. Find the experience section
2. Look for an existing experience card
3. Copy the entire `<div class="experience-card">` block
4. Paste it after the last experience
5. Update all the fields

**Example**:
```html
<div class="experience-card">
    <div class="experience-header">
        <h3>Your Job Title</h3>
        <span class="date">Month Year – Month Year</span>
    </div>
    <p class="organization">Company Name</p>
    <p class="location">City, Country</p>
    <p class="description">Your description here.</p>
</div>
```

### Add a New Research Project

1. Find the research section
2. Look for an existing research card
3. Copy the entire `<div class="research-card">` block
4. Paste it after the last project
5. Update the title and description

**Example**:
```html
<div class="research-card">
    <h3>Your Project Title with <em>Scientific Name</em></h3>
    <p class="project-category">Category</p>
    <p class="description">Description here.</p>
</div>
```

### Add a New Skill

1. Find the skills section
2. Locate the category you want to add to
3. Find the `<div class="skill-tags">` section
4. Add a new skill tag:

```html
<span class="skill-tag">New Skill Name</span>
```

---

## Replacing Your CV

### Step 1: Prepare Your CV

Your CV must be:
- A PDF file
- Named exactly: `Muhammad_Anas_Khan_CV.pdf` (or update the name if you prefer)
- Saved on your computer

### Step 2: Upload to GitHub

1. Go to your GitHub repository
2. Navigate to the `assets/documents/` folder
3. Click "Add file" → "Upload files"
4. Choose your CV PDF from your computer
5. Drag and drop, or click "choose your files"
6. Click "Commit changes"

### Step 3: Update the Link (if you changed the name)

If you **renamed** your CV file:

1. Open `index.html` for editing
2. Find this line in the Contact section:
   ```html
   <a href="assets/documents/Muhammad_Anas_Khan_CV.pdf"
   ```
3. Replace `Muhammad_Anas_Khan_CV.pdf` with your new filename
4. Commit the changes

If you **kept the same name**, no changes needed! Just upload and it replaces the old CV.

---

## Changing Your Profile Image

### Step 1: Prepare Your Image

Your image should be:
- A square image (at least 300x300 pixels)
- JPG, PNG, or WebP format
- Professional headshot
- Not too large (under 2MB)

**How to take a good profile photo**:
- Use good lighting
- Use a plain background
- Dress professionally
- Smile naturally
- Get a good crop of your head and shoulders

### Step 2: Upload to GitHub

1. Go to your repository
2. Navigate to `assets/images/` folder
3. Click "Add file" → "Upload files"
4. Choose your image
5. Commit changes

**Option A: Keep Same Filename**
- Rename your image to: `profile-placeholder.png` (or `.jpg`)
- This replaces the placeholder automatically
- Done!

**Option B: Use Different Filename**
- Upload with any name you want
- Edit `index.html`
- Find this line:
  ```html
  <img src="assets/images/profile-placeholder.png" alt="Muhammad Anas Khan"
  ```
- Replace `profile-placeholder.png` with your filename
- Commit changes

### Step 3: Verify

Wait 1-2 minutes and visit your website. Your new image should appear!

---

## Common Mistakes & How to Fix

### Mistake 1: Dates with Wrong Character

**Wrong**: `2024 – 2025` (using regular dash)
**Right**: `2024 – 2025` (using en-dash or two hyphens)

Most systems auto-correct this, but if it looks wrong, use: `–` (en-dash)

### Mistake 2: Forgot to Close a Tag

If your website looks broken after editing, you might have:
- Deleted a closing tag like `</div>` or `</p>`
- Accidentally removed `<` or `>` symbols

**Solution**: 
- Look for unmatched tags
- Every opening tag needs a closing tag
- Example: `<h3>Name</h3>` (needs both)

### Mistake 3: Broken Email Link

**Wrong**: `mailto:yourname@email.com"` (missing closing quote)
**Right**: `<a href="mailto:yourname@email.com">Email me</a>`

Check that:
- Email links have `mailto:` before the address
- Text is in quotes `"like this"`
- The link has opening `<a` and closing `</a>` tags

### Mistake 4: Broken Links

**Wrong**: `https://linkedin.com/in/profile` (missing `www.` if needed)
**Right**: `https://www.linkedin.com/in/profile`

Always use full URLs:
- Include `https://` at the start
- Check that the URL is correct by visiting it in your browser

### Mistake 5: Removed Required Text

If you delete text between tags:

**Wrong**:
```html
<span class="date"></span>  <!-- Empty -->
```

**Right**:
```html
<span class="date">2024 – Present</span>  <!-- Has content -->
```

Always put content between opening and closing tags.

---

## Troubleshooting

### Q: I made changes but they don't show up on the website

**A**: Wait 1-2 minutes for GitHub Pages to rebuild. Then:
1. Go to your live website URL
2. Hard refresh your browser:
   - Windows: Press `Ctrl + Shift + R`
   - Mac: Press `Cmd + Shift + R`
3. If still not working, check that you clicked "Commit changes"

### Q: I accidentally deleted something important

**A**: Don't worry! GitHub keeps a history of all changes.
1. Go to your repository on GitHub
2. Click the "History" button (clock icon)
3. Find the version before your mistake
4. Click on it, then click "Revert"

### Q: How do I undo a recent change?

**A**: Use Git history:
1. On your repository page, click the commit hash (looks like: `abc123d`)
2. You'll see all files and changes
3. Go back further in history and click "Revert"

Or simply edit the file again and fix the mistake.

### Q: Image won't display

**A**: Check:
1. Image is in the correct folder (`assets/images/`)
2. Image filename is exactly correct (including capitalization)
3. The path in the HTML matches exactly
4. Image file is actually uploaded (click the folder to check)

**Common issue**: `profile-placeholder.png` vs `profile-placeholder.PNG` (different capitalization)

### Q: The whole website is broken

**A**: Likely cause: You accidentally deleted a closing tag or broke HTML structure.

**How to fix**:
1. Click on your most recent commit
2. Look for what changed
3. Click "Revert" to go back to the previous version
4. Make the change more carefully this time

### Q: How do I know if my change was saved?

**A**: 
1. After you click "Commit changes," the page returns to normal
2. Look at the commit history (click the clock icon)
3. Your change should appear at the top with your message

### Q: Can I edit on my phone?

**A**: Yes! GitHub's web editor works on mobile:
1. Open GitHub on your phone browser
2. Navigate to `index.html`
3. Click the pencil icon
4. Edit and commit changes
5. Website updates work the same way

---

## Best Practices

1. **Commit frequently**: Save after each section you update
2. **Use clear messages**: "Update education dates" instead of "Changes"
3. **Proofread**: Check spelling and dates before committing
4. **Test on mobile**: View your website on a phone too
5. **Keep backup**: Save a local copy of important files
6. **Date format**: Always use `Month Year – Month Year` (2024 – Present)
7. **Use bullets**: For lists of items, you can add `•` symbol or use line breaks

---

## Getting Help

If you get stuck:

1. **Check this guide** for your specific question
2. **Look at existing examples** - copy and modify existing cards
3. **Use browser Inspector** - right-click → Inspect to see HTML structure
4. **Ask someone** - share your GitHub link and ask for help
5. **Check GitHub Docs** - https://docs.github.com

---

**Remember**: You can't break anything permanently! GitHub keeps all versions of your files. Take your time, commit often, and you'll get comfortable with editing.

Happy updating! 🎉

---

**Last Updated**: 2024
**For deployment help, see**: `DEPLOYMENT_GUIDE.md`
