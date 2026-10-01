# cbjrobertson.github.io

Personal website, built with Jekyll and hosted on GitHub Pages.

## Publish changes

From this folder:

```
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds the site from the `master` branch within a minute or two (check *Settings → Pages* if it doesn't). `thesis.pdf` stays at the root so that https://cbjrobertson.github.io/thesis.pdf keeps working; the thesis page lives at `/thesis/`, the address printed in the thesis itself.

## Set up the contact form

1. Sign up at https://formspree.io and create a new form. Use the email address where you want messages delivered.
2. Copy the form ID. It is the end of the endpoint, `https://formspree.io/f/xxxxxxxx`.
3. In `_config.yml`, replace `YOUR_FORM_ID` with that ID, and commit.
4. Send yourself a test message from the Contact page. The first submission asks you to confirm the form by email.

## Everyday edits

| To change | Edit |
|---|---|
| Home page text, photo, or links | `index.html`, `_config.yml` (`links:`) |
| Research themes | `research.html` |
| Publications and talks | `_data/publications.yml` (one entry per item, newest first) |
| Companies | `companies.html` |
| Thesis page | `thesis.html` |
| The downloadable CV | Replace `assets/cv/Robertson_CV.pdf`, keeping the same file name |
| Colours and type | `assets/css/style.css` (the variables at the top) |

## Start the blog

1. Copy `_posts/2026-10-01-example-post.md`, rename it `YYYY-MM-DD-short-title.md`, write the post in Markdown, and delete the `published: false` line.
2. To link a cross-post, fill in `crosspost_url` and `crosspost_name` (for example `LessWrong`). Otherwise delete those two lines.
3. In `_config.yml`, set `show_blog: true`. This adds *Writing* to the menu.

**Link-only posts.** For a post whose full text lives on Substack, add `external_url:` (and optionally `external_name:`) to the header and keep the body to a sentence or two. On the Writing page the title links straight to Substack, and the post's own page shows a "Read it on Substack" button. `_posts/2026-10-01-launching-robertson-on-ai.md` is an example.

Posts appear at `/blog/` and in an RSS feed at `/feed.xml`, which Substack and other readers can import.

## Preview locally (optional)

With Ruby installed: `bundle install`, then `bundle exec jekyll serve`, and open http://localhost:4000.
