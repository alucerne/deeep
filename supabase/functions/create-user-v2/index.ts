name: Deploy Supabase Function

on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Install Supabase CLI
        run: |
          curl -sL https://github.com/supabase/cli/releases/latest/download/supabase-cli-linux-x64.tar.gz | tar xz
          sudo mv supabase /usr/local/bin

      - name: Deploy create-user function
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
        run: |
          supabase link --project-ref sjfbjdukjlywvsfiplof
          supabase functions deploy create-user
