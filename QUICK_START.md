# Quick Start Guide - Get Your Portfolio Online in 5 Steps

Welcome! This guide will get your professional portfolio website live in just 5 steps.

## ⏱️ Time Required: ~20 minutes

---

## 📋 What You're Getting

✅ Modern, professional portfolio website
✅ Fully responsive (works on mobile, tablet, desktop)
✅ Dark mode support
✅ Easy editing via GitHub (no coding needed)
✅ Free hosting with GitHub Pages
✅ All your professional information

---

## 🚀 The 5 Steps

### Step 1: Create a GitHub Account (2 minutes)

1. Go to https://github.com/signup
2. Enter your email
3. Create a password
4. Choose a username (this will be in your website URL)
5. Verify your email

**Your website URL will be**: `https://yourusername.github.io/portfolio/`

---

### Step 2: Create a Repository (1 minute)

1. Sign into GitHub
2. Click the **"+"** icon → **"New repository"**
3. Name it: `portfolio`
4. Select **"Public"**
5. Click **"Create repository"**

---

### Step 3: Upload Your Files (5 minutes)

1. Click **"Add file"** → **"Upload files"**
2. Download all files from this package
3. Drag and drop them into GitHub, or select them
4. Click **"Commit changes"**

**Files to upload**:
- `index.html`
- `README.md`, `EDITING_GUIDE.md`, `DEPLOYMENT_GUIDE.md`
- `css/style.css`
- `js/script.js`
- `assets/images/profile-placeholder.svg`
- `assets/documents/Muhammad_Anas_Khan_CV.pdf` (add your CV)

---

### Step 4: Enable GitHub Pages (2 minutes)

1. Go to repository **"Settings"**
2. Click **"Pages"** (left sidebar)
3. Under "Source" → select **"Deploy from a branch"**
4. Select branch: `main`, folder: `/ (root)`
5. Click **"Save"**

**Wait 1-2 minutes for GitHub to build your site...**

---

### Step 5: View Your Live Website (1 minute)

1. GitHub will show: 
   ```
   ✓ Your site is live at https://yourusername.github.io/portfolio/
   ```
2. Click that link or copy and paste it
3. **Your portfolio is live!** 🎉

---

## ✏️ Next: Personalize Your Portfolio

### Essential Edits (Do These First)

1. **Open** `index.html` from GitHub
2. **Click** the pencil icon to edit
3. **Find and change** these items:

| Item | Find This | Change To |
|------|-----------|-----------|
| Your Name | `Muhammad Anas Khan` | Your name |
| Email | `muhammadanaskhan74147@gmail.com` | Your email |
| LinkedIn URL | `anaskhan74147` | Your LinkedIn username |
| Profile Image | Replace `profile-placeholder.svg` | Your professional photo |
| CV File | Upload your PDF to `assets/documents/` | Your actual CV |

4. **Commit** your changes
5. **Wait 1-2 minutes**
6. **Refresh** your website

---

## 🖼️ How to Add Your Profile Photo

### Option 1: Replace the Placeholder

1. Take a professional headshot
2. Save as `profile-placeholder.png` (or `.jpg`)
3. Upload to `assets/images/`
4. Done! It automatically replaces the old one

### Option 2: Use a Different Filename

1. Upload your image to `assets/images/`
2. Edit `index.html`
3. Find this line:
   ```html
   <img src="assets/images/profile-placeholder.svg"
   ```
4. Replace with your filename
5. Commit changes

---

## 📄 How to Update Your CV

1. Create/update your CV in Word or Google Docs
2. Export as PDF
3. Name it: `Muhammad_Anas_Khan_CV.pdf` (or keep existing name)
4. Go to GitHub → `assets/documents/` folder
5. Click **"Add file"** → **"Upload files"**
6. Select your PDF
7. Click **"Commit changes"**

Done! The CV download link automatically updates.

---

## ✅ Content Verification Checklist

Before sharing your portfolio with others, verify:

### Personal Information
- [ ] Your name is correct
- [ ] Professional headline is accurate
- [ ] Email address is correct
- [ ] LinkedIn URL works and is correct
- [ ] Location information is accurate

### Education
- [ ] University names are correct
- [ ] Dates are accurate (use 2025 – Present format)
- [ ] Degree names are spelled correctly
- [ ] No typos in descriptions

### Experience
- [ ] Company names are spelled correctly
- [ ] Job titles are accurate
- [ ] Dates are correct
- [ ] Descriptions match what you actually did
- [ ] No exaggerations

### Biotech Squad
- [ ] Organization name is correct
- [ ] Your roles are accurately described
- [ ] No invented details

### Research
- [ ] Project titles are correct
- [ ] Scientific names are italicized
- [ ] No unpublished research details included
- [ ] Descriptions are general/academic

### Awards & Leadership
- [ ] Award names are spelled correctly
- [ ] Years are accurate
- [ ] Organization/event names are correct
- [ ] No exaggerations

### Skills
- [ ] Skills listed are ones you actually have
- [ ] Skills are relevant to microbiology/research
- [ ] No false proficiency claims

### Contact
- [ ] Email address works (test it!)
- [ ] LinkedIn link goes to your profile
- [ ] CV file downloads correctly
- [ ] CV file is up to date

### Technical
- [ ] Website loads without errors
- [ ] Mobile view looks good
- [ ] Dark mode works
- [ ] All buttons work
- [ ] No broken links
- [ ] No missing images
- [ ] No spelling errors

---

## 🎯 Tips for Success

### Profile Photo
- Use a clear, professional headshot
- Good lighting and plain background
- Dressed professionally
- Square image works best (300x300 pixels or larger)
- Keep file size small (under 2MB)

### CV File
- Update regularly
- Keep as PDF
- Use your full name in filename
- Keep it concise (1-2 pages)

### Content Writing
- Be honest—no false claims
- Use action verbs: "Developed," "Led," "Contributed"
- Include specific dates
- Keep descriptions concise
- Proofread before publishing

### Sharing
- Add to LinkedIn profile
- Include in email signature
- Share on Twitter/X
- Put on your resume
- Send to mentors for feedback

---

## 🔄 Regular Maintenance

### Monthly
- Review content for accuracy
- Check all links still work
- Ensure no typos

### Every 3 Months
- Update experience if you started new role
- Add new awards/recognition
- Update skills if you learned something new
- Review CV for accuracy

### Yearly
- Review overall design
- Check for outdated information
- Consider design improvements

---

## 📞 Need Help?

### For Editing Help
See: `EDITING_GUIDE.md`
- Detailed instructions for updating any section
- Examples of correct formatting
- Common mistakes and fixes

### For Deployment Help
See: `DEPLOYMENT_GUIDE.md`
- Step-by-step GitHub Pages setup
- Troubleshooting deployment issues
- Custom domain setup (advanced)

### For General Info
See: `README.md`
- Project overview
- Features explanation
- Technology stack info
- Troubleshooting guide

---

## 🎓 Example Edits

### Example 1: Update Education Dates

**Find this**:
```html
<span class="date">2025 – Present</span>
```

**Change to**:
```html
<span class="date">2024 – Present</span>
```

### Example 2: Add a New Skill

**Find this**:
```html
<span class="skill-tag">Biosafety Protocols</span>
```

**Add below it**:
```html
<span class="skill-tag">Your New Skill</span>
```

### Example 3: Update Email

**Find all instances of**:
```
muhammadanaskhan74147@gmail.com
```

**Replace with**:
```
youremail@example.com
```

---

## ⚠️ Important Reminders

✅ **DO** verify all information is accurate
✅ **DO** use professional photos
✅ **DO** proofread before publishing
✅ **DO** update regularly
✅ **DO** test all links

❌ **DON'T** include unpublished research details
❌ **DON'T** exaggerate your experience
❌ **DON'T** make false claims about skills
❌ **DON'T** include your full home address
❌ **DON'T** use unprofessional photos

---

## 🚀 You're Ready!

You now have:
- ✅ A professional portfolio website
- ✅ Free hosting on GitHub Pages
- ✅ Easy editing through GitHub
- ✅ A tool for career networking

**Next Steps**:

1. **Personalize** your content (10 minutes)
2. **Add your photo** (2 minutes)
3. **Update your CV** (2 minutes)
4. **Test everything** (5 minutes)
5. **Share your URL** with your network

---

## 📈 What to Do With Your Portfolio

### Academic Applications
- Add to PhD applications
- Share with potential advisors
- Include in academic proposals

### Professional Networking
- Add to LinkedIn profile
- Share with mentors
- Send to researchers you admire
- Include in job/internship applications

### Community
- Share in Biotech Squad
- Include in volunteer organization bios
- Share with academic peers
- Use for conference registration

### Career Development
- Update regularly as you grow
- Track your progress over years
- Use as a career planning tool
- Showcase achievements to potential employers

---

## 🎉 Congratulations!

You've successfully created a professional portfolio website!

**Share your URL**:
```
Check out my professional portfolio: https://yourusername.github.io/portfolio/
```

Remember to:
- Keep it updated
- Fix typos quickly
- Add new achievements regularly
- Test on mobile devices
- Backup your CV and important files

**Good luck with your academic and professional journey!** 🔬📚

---

**Questions?** Refer to:
- `EDITING_GUIDE.md` for content updates
- `DEPLOYMENT_GUIDE.md` for technical help
- `README.md` for feature explanations

**Last Updated**: 2024
