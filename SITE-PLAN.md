# Crush Medical Debt — Site Plan

From the October 30, 2026 statement of work with Dr. Virgie Bright Ellington. This is the working page map for Phase 1.

The site has two jobs:

1. Sell the Crush Medical Debt book.
2. Give free resources to people who need help with medical bills.

## Phases

**Phase 1** — Refresh look, layout, and organization of existing content. Make the site easy to use on computers and phones. Make resources easy to find. Add a Medical Bill Shield link and a contact form to Virgie’s inbox. Preview before the November 16, 2026 review call (8:30 a.m. Eastern).

**Phase 2** — Review call, then one combined round of text, image, and layout revisions. Publish on the existing domain via Vercel after written approval. DNS is on GoDaddy.

## Ten-page structure

| Section | Page | File | What goes on it |
|---|---|---|---|
| Home | Home | `index.html` | Book, links to free resources and purchase options, existing testimonials |
| Book | About the Book | `pages/book.html` | Book description written by Virgie, existing book media, purchase links |
| Resources | Step 1 | `pages/step-1.html` | Client-supplied summary + existing resource links for getting a bill with CPT codes |
| Resources | Step 2 | `pages/step-2.html` | Client-supplied summary + existing resource links for Medicare rates |
| Resources | Step 3 | `pages/step-3.html` | Client-supplied summary + existing resource links for payment plans |
| Resources | Seniors | `pages/seniors.html` | Existing senior resource content and links |
| About | About Dr. Virgie | `pages/about.html` | Existing biography, expertise, approved image |
| About | Newsroom | `pages/newsroom.html` | Existing media appearances and interview links |
| About | TED Talk | `pages/ted-talk.html` | Existing talk with a short introduction and video or external link |
| Contact | Contact | `pages/contact.html` | Form sending name, email, and message to Virgie’s inbox |

Homepage Step 1 / Step 2 / Step 3 cards link to those three resource pages. The Resources nav item goes to `pages/resources.html`, which is the hub for the four resource pages above.

## How the clicks work

```
Home
 ├── Get the book  →  About the Book
 ├── Free resources  →  Resources hub
 └── Three steps
      ├── Step 1  →  pages/step-1.html  →  CPT-code articles and checklist
      ├── Step 2  →  pages/step-2.html  →  Medicare / EOB articles
      └── Step 3  →  pages/step-3.html  →  payment-plan / negotiation articles

Resources hub
 ├── Step 1
 ├── Step 2
 ├── Step 3
 ├── Seniors
 └── Checklist, blog, and existing outside links

About
 ├── About Dr. Virgie
 ├── Newsroom
 └── TED Talk

Contact  →  contact form (pending inbox)
```

## Still using existing extra pages

These are not in the ten-page SOW list. They stay in the site so current links do not break: blog, medical bill paying checklist, donate, share your story, employers, privacy, terms, support.

Medical Bill Shield is a placeholder until the real link is provided.

## Client materials still needed

- Final book description
- Three-step summaries (replace `[Step 1 summary]`, `[Step 2 summary]`, `[Step 3 summary]`)
- Approved images
- Resource and purchase links
- Inbox for contact inquiries
- GoDaddy DNS access
- Medical Bill Shield URL

Delayed materials can move the November 16 preview.

## Out of scope

A CMS and setting up or moving email accounts are not included. Future media or blog posting process will be discussed separately.
