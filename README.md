# Notion Release Notes

Easily create new entries in a Notion database from your workflow runs. Designed for release notes, but flexible for other uses.

---

## Setup

### 1\. Prepare Your Notion Database

This action expects a Notion database with these properties:

- **Name**: Text
- **Date**: Date
- **Tags**: Multi-select

Duplicate the template: [Notion Release Notes Template](https://www.notion.so/niklv/272d0c489907802faeede20c94faf00b?v=272d0c48990780e89eba000c22acc436)

**Get your `NOTION_DATABASE_ID`:**

- Open your database in Notion.
- Click the `...` menu and select `Copy link`.
- The GUID at the end of the URL is your database ID.
  - Example: For the template above, the ID is `272d0c489907802faeede20c94faf00b`.

### 2\. Create a Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/profile/integrations).
2. Create a new integration (e.g., "GitHub Action Release Notes").
3. Select your workspace.
4. After creation, share your database with the integration.
5. Copy your integration token (`NOTION_TOKEN`).

---

## Usage

See the example workflow: [`release.yml`](./.github/workflows/release.yml) or [`release_sync.yml`](./.github/workflows/release_sync.yml)
