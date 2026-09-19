# Deployment Guide: Publishing Your Portfolio to GitHub Pages

This guide explains how to get your portfolio website live on the internet for free using GitHub Pages.

## 🌐 What is GitHub Pages?

GitHub Pages is a free web hosting service from GitHub. It allows you to publish your website directly from your GitHub repository. Your website will be live at:

```
https://yourusername.github.io/portfolio/
```

## 📋 What You'll Need

- A GitHub account (free)
- Your portfolio files ready
- A computer with internet access
- About 15 minutes

---

## Step 1: Create a GitHub Account

### If You Already Have GitHub

Skip to Step 2.

### If You're New to GitHub

1. Go to https://github.com/signup
2. Enter your email address
3. Create a password
4. Choose a username (you'll use this in your website URL)
5. Follow the prompts to complete signup
6. Verify your email address

**Tips for choosing a username**:
- Keep it simple and professional
- Use lowercase letters and numbers
- Avoid special characters
- Your website URL will use this: `https://yourusername.github.io/portfolio/`

---

## Step 2: Create a New Repository

### What is a Repository?

A repository is a folder that stores all your website files. Think of it as a project folder.

### How to Create One

1. Go to GitHub and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:

**Repository Name**: `portfolio` (you can use any name)

**Description** (optional): 
```
Muhammad Anas Khan - Professional Microbiology Portfolio Website
```

**Visibility**: Select **"Public"** (required for GitHub Pages)

**Initialize with a README**: Leave unchecked

5. Click **"Create repository"**

You've created your repository! It's empty right now—you'll add files next.

---

## Step 3: Upload Your Website Files

You have two options: Use the GitHub web interface (easiest) or use Git command line (for advanced users).

### Option A: Upload via GitHub Web Interface (Easiest)

#### Upload Individual Files

1. You should see an empty repository page
2. Click the link that says **"uploading an existing file"** or click **"Add file" → "Upload files"**
3. You can now drag and drop files or click to browse

#### Upload Multiple Files at Once

1. Click **"Add file" → "Upload files"**
2. Drag and drop your files, OR click "choose your files" and select them
3. A progress bar will show upload status
4. Click **"Commit changes"**

**Files to Upload** (in any order):

```
Main files:
- index.html
- README.md
- EDITING_GUIDE.md
- DEPLOYMENT_GUIDE.md

css/ folder:
- style.css

js/ folder:
- script.js

assets/images/ folder:
- profile-placeholder.png (or your actual profile image)

assets/documents/ folder:
- Muhammad_Anas_Khan_CV.pdf (or your CV file)
```

**Quick Tip**: Upload the HTML and supporting files first, then create folders.

#### Creating Folders

If GitHub doesn't auto-create folders:

1. Click **"Create new file"**
2. In the filename field, type: `css/style.css`
3. Paste the CSS code (this automatically creates the `css/` folder)
4. Click "Commit changes"
5. Repeat for `js/script.js` and other files

### Option B: Using Git (Advanced)

If you know Git:

```bash
# Clone your repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to folder
cd portfolio

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Add portfolio website"

# Push to GitHub
git push origin main
```

---

## Step 4: Verify Files Are Uploaded

1. Go to your repository page on GitHub
2. You should see:
   - `index.html`
   - `README.md`
   - `EDITING_GUIDE.md`
   - `DEPLOYMENT_GUIDE.md`
   - `css/` folder
   - `js/` folder
   - `assets/` folder

3. Click into `assets/images/` and verify your profile image is there
4. Click into `assets/documents/` and verify your CV is there

If anything is missing, upload it now by clicking "Add file" → "Upload files"

---

## Step 5: Enable GitHub Pages

### Find Settings

1. Go to your repository page
2. Click the **"Settings"** tab (top right of the file list)
3. On the left sidebar, scroll down and click **"Pages"**

### Configure GitHub Pages

1. Under **"Source"**, you'll see a dropdown
2. Select **"Deploy from a branch"**
3. Under **"Branch"**, select:
   - Branch: `main` (or `master` if that's your default)
   - Folder: `/ (root)`
4. Click **"Save"**

GitHub will now rebuild your site. This takes 1-2 minutes.

### Watch for Confirmation

After a few seconds, you'll see a message:

```
✓ Your site is live at https://yourusername.github.io/portfolio/
```

**Bookmark this URL!** This is your live website.

---

## Step 6: Verify Your Website Is Live

1. Wait 1-2 minutes after enabling GitHub Pages
2. Copy the URL: `https://yourusername.github.io/portfolio/`
3. Open it in a new browser tab
4. You should see your portfolio website!

### If It's Not Working

**Wait longer**: GitHub Pages sometimes takes 2-5 minutes to deploy
- Try again in 2 minutes
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**Check file structure**: Make sure all files are in the right places
- Click around in your repository to verify structure

**Check index.html**: Make sure it was uploaded correctly
- Click on `index.html` in your repository
- You should see the HTML code, not an error

---

## Step 7: Share Your Portfolio

Your website is now live! Share it with:

**Social Media**:
```
Check out my professional portfolio: https://yourusername.github.io/portfolio/
```

**Email**:
```
Hi [Name],

Here's my professional portfolio website:
https://yourusername.github.io/portfolio/

Looking forward to staying in touch!
```

**LinkedIn**:
Add the link to your LinkedIn profile under "Website" or in your summary.

**Resume/CV**:
Include the URL in your resume.

---

## Step 8: Making Updates (After Deployment)

Once your site is live, updating is easy:

### Quick Update via GitHub Web Interface

1. Go to your repository
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (✏️) to edit
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Wait 1-2 minutes
7. Refresh your website to see changes

**For detailed editing instructions, see `EDITING_GUIDE.md`**

### Update Your CV

1. Go to `assets/documents/` folder
2. Click on your current CV
3. Click "Delete this file"
4. Confirm deletion
5. Go back to the folder
6. Click "Add file" → "Upload files"
7. Upload your new CV with the same name
8. Commit changes

---

## Troubleshooting

### Q: I see "404 - Page not found"

**A**: GitHub Pages hasn't finished deploying yet.
1. Wait 2-5 minutes
2. Hard refresh your browser (Ctrl+Shift+R)
3. Check that `index.html` is in your repository

### Q: Files aren't showing up in my repository

**A**: The upload might have failed.
1. Check your internet connection
2. Try uploading again
3. Verify the file uploaded by clicking on it

### Q: My website looks broken (styling is wrong)

**A**: The CSS or JavaScript file might not have uploaded correctly.
1. Click into `css/style.css` in your repository
2. You should see CSS code
3. If it's empty, re-upload it
4. Click into `js/script.js`
5. If empty, re-upload it
6. Hard refresh your website (Ctrl+Shift+R)

### Q: Images aren't displaying

**A**: 
1. Check that image is in `assets/images/` folder
2. Verify the filename is spelled correctly
3. Make sure the HTML path matches the actual location
4. Try a different image file to test

### Q: I need to go back to a previous version

**A**: GitHub keeps all versions of your files!
1. Go to your repository
2. Click on the file you want to restore
3. Click "History" (clock icon) at the top
4. Find the version you want
5. Click "View file"
6. Click the "..." menu and select "Revert"

### Q: How do I use a custom domain (yourname.com instead of github.com)?

**A**: This is advanced, but possible:
1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to repository Settings → Pages
3. Under "Custom domain," enter your domain name
4. Follow the registrar's instructions to point DNS to GitHub
5. GitHub will handle the rest

**For now, use the GitHub URL**—you can add a custom domain later.

### Q: Can I use a different repository name?

**A**: Yes! Your URL will be:
```
https://yourusername.github.io/repository-name/
```

If you name it something other than "portfolio," remember to share that full URL.

### Q: How do I check deployment status?

**A**: 
1. Go to your repository
2. Click **"Deployments"** tab (you might need to scroll the top tabs)
3. You'll see a list of recent deployments
4. Green checkmark = successful
5. Yellow circle = in progress
6. Red X = failed (check error message)

---

## Advanced: Using a Custom Domain

If you want `yourname.com` instead of `yourusername.github.io/portfolio/`:

### Step 1: Buy a Domain

1. Go to a domain registrar:
   - GoDaddy.com
   - Namecheap.com
   - Google Domains
   - Others

2. Search for your desired domain (e.g., `muhammadanas.com`)
3. Purchase it
4. Keep your login info safe

### Step 2: Configure DNS

1. In your domain registrar's control panel, find "DNS Settings"
2. Add GitHub's DNS records (check GitHub's docs for current IPs)
3. This typically takes 24-48 hours to fully propagate

### Step 3: Configure GitHub Pages

1. Go to your repository Settings → Pages
2. Under "Custom domain"
3. Enter your domain name
4. Click "Save"
5. GitHub will verify the DNS

**Note**: This is optional. The GitHub URL works perfectly fine!

---

## Performance Tips

### Make Your Website Faster

1. **Compress Images**: Use tools like TinyPNG.com to reduce file size
2. **Minimize CSS**: Remove unnecessary spaces (optional)
3. **Load Test**: Use GTmetrix.com to test speed

### Monitor Your Site

1. **Uptime Monitor**: Use services like UptimeRobot.com to get alerts if site goes down
2. **Analytics**: Add Google Analytics (optional)
3. **Search Console**: Register with Google Search Console

---

## Keeping Your Site Updated

### Regular Maintenance

- **Monthly**: Review content for accuracy
- **Quarterly**: Update experience, skills, awards
- **Yearly**: Update overall design if needed

### When to Update

- Started a new job/internship
- Received an award
- Completed a course
- Added new skills
- Got published
- Changed email

Just edit through GitHub and your site updates automatically!

---

## Next Steps

✅ **Website is live!** 

Now:

1. **Share your URL** with your network
2. **Add it to your LinkedIn** profile
3. **Update it regularly** (use `EDITING_GUIDE.md`)
4. **Get feedback** from mentors or friends
5. **Keep adding content** as your career grows

---

## Checklist Before Going Live

- [ ] All files uploaded to repository
- [ ] index.html exists and contains content
- [ ] CSS folder and style.css uploaded
- [ ] JS folder and script.js uploaded
- [ ] assets/images/ folder with profile image
- [ ] assets/documents/ folder with CV
- [ ] GitHub Pages enabled in Settings
- [ ] Website URL is live and working
- [ ] Navigation works correctly
- [ ] Mobile view looks good
- [ ] Dark mode toggle works
- [ ] Links work (email, LinkedIn, CV)
- [ ] No broken images
- [ ] No spelling errors
- [ ] Content is accurate and current

---

## Celebrate! 🎉

Your professional portfolio is now live on the internet!

You've accomplished:
✅ Created a GitHub account
✅ Built a professional website
✅ Deployed to GitHub Pages
✅ Made it accessible worldwide

Share your URL, keep updating it, and good luck with your academic and professional journey!

---

## Support

- **GitHub Docs**: https://docs.github.com/en/pages
- **GitHub Help**: https://support.github.com
- **Stack Overflow**: https://stackoverflow.com (for technical questions)

---

**Last Updated**: 2024
**Questions?** See `EDITING_GUIDE.md` for content updates or `README.md` for feature explanations.
