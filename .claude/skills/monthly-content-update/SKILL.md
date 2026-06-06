---
name: monthly-content-update
description: >
  Run a monthly content refresh for andrewweinmann.dev. Use this skill whenever the user wants to
  update the site content, refresh what's on the home page, add/remove items from the "currently"
  list, update hardware or software on the uses page, or do a periodic content review of the
  portfolio site. Trigger phrases: "update the site", "monthly update", "refresh the content",
  "what's on the site", "update my currently list", "update uses", or any request to make
  content edits to the portfolio without specifying individual files.
---

## What this skill does

Interviews the user about recent changes in their life and work, then makes targeted edits to the
site content — keeping the existing voice (dry, understated, first-person) — on a dedicated branch,
ready for review before pushing.

## Content map

| File | What changes |
|------|-------------|
| `src/pages/home.tsx` | `currently` array — the "what I'm up to" snapshot |
| `src/pages/about.tsx` | Background or Interests sections — rarely changes |
| `src/pages/uses.tsx` | Hardware / Software / Services lists |
| `src/components/layout.tsx` | Footer "Updated Month YYYY" date |

## Step 1: Read current content

Before starting the interview, read all four files so your questions are grounded in what's
actually there. Note anything that looks stale or that the user might want to revisit.

## Step 2: Check for an existing update branch

```bash
git branch --list "content/update-$(date +%Y-%m)"
```

If a branch already exists, tell the user: "There's already a `content/update-YYYY-MM` branch
with some changes on it. Want to continue where that left off, or start fresh?" Show the existing
diff so they know what's there:

```bash
git diff main...content/update-$(date +%Y-%m)
```

If continuing, check out that branch and proceed to the interview — treat existing changes as a
starting point. If starting fresh, confirm the user wants to reset the branch before doing so.

## Step 3: Interview the user

Ask **one question at a time**. Wait for the answer before asking the next one. This keeps it
conversational rather than feeling like a form.

Work through these areas in order, skipping any that clearly haven't changed based on the user's
previous answers. Three to five questions total is the right length — stop when you have enough
to make the edits.

**Home / Currently list** (start here — it changes most often):
1. "What are you actively working on right now — anything new since the list was last updated?"
2. "Anything you've started or stopped watching, playing, learning, or doing outside work?"

**Uses page** (ask only if the currently conversation didn't already cover gear/tools):
3. "Any new gear, tools, or services you've picked up or dropped in the last few months?"

**About page** (rarely needs touching — ask only if something seems stale):
4. "Anything in your background or interests section feel out of date?"

After the last answer, briefly confirm your understanding before writing — e.g., "Got it — I'll
update the currently list and add the new keyboard to uses. Anything else?"

## Step 4: Create or switch to the branch

If no existing branch, run the bundled script (avoids a permission prompt from command substitution):

```bash
bash .claude/skills/monthly-content-update/scripts/create-branch.sh
```

## Step 5: Make the edits

Apply the changes the user described. A few rules:

- **Voice**: Keep it matching Andrew's existing style — short, plain sentences, no marketing
  language. If he said "I've been tinkering with Home Assistant automations", write
  `value: "Home Assistant automations"` — don't embellish.
- **Currently list**: Update only the entries that changed. Add new ones at the right position.
  Remove ones that are no longer accurate.
- **Uses page**: Items follow the pattern `{ name, description?, href? }`. Match the terseness
  of existing descriptions. Only add an `href` if you have the actual URL.
- **About page**: Adjust existing paragraphs in place rather than restructuring. Don't add
  new sections unless the user specifically asked for one.
- **Footer date**: Update the `<span>Updated Month YYYY</span>` in `src/components/layout.tsx`
  to the current month and year (e.g., `Updated June 2026`). Always do this — it reflects when
  the content was last reviewed, not just when the code changed.
- Don't touch anything outside the four content files unless the user asked you to.

After editing, run:

```bash
npm run check && npm run typecheck
```

Fix any issues before committing.

## Step 6: Commit

Stage only the files you changed and commit:

```bash
git add src/pages/home.tsx src/pages/about.tsx src/pages/uses.tsx src/components/layout.tsx
git commit -m "content: monthly update $(date +%Y-%m)

<one-line summary of main changes>"
```

Replace the summary line with a brief description of what actually changed (e.g.,
"update currently list, add new keyboard to uses").

## Step 7: Wait for review

Tell the user:

> "Done — changes are committed on `content/update-YYYY-MM`. Run `git diff main` or `npm run dev`
> to review. When you're happy, say the word and I'll push and open a PR."

Do not push until the user explicitly approves.

## Step 8: Push and open PR

```bash
git push -u origin content/update-$(date +%Y-%m)
gh pr create \
  --title "content: monthly update $(date +%Y-%m)" \
  --body "$(cat <<'EOF'
Monthly content refresh.

## Changes
- <bullet list of what changed>

## Review
- [ ] Voice matches existing copy
- [ ] No stale items left in the currently list
- [ ] Links are valid
EOF
)"
```

Return the PR URL.
