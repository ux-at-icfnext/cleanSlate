# nex+
## About:
## Installation/Set-up Local Environment:
1. Install ruby and ruby gems on local:
    - Ruby 2.6.3
    - Ruby Gem 3.0.3
        - Recommendation: Install a ruby gems bundler that will allow for you to install the specific version of ruby needed for your project and manage ruby versions on your computer (ex. chruby and ruby-installer)
            - Chruby and ruby-installer set-up documentation: https://mac.install.guide/ruby/12.html
2. Clone GitHub Repository 
    - git clone https://github.com/ux-at-icfnext/next.git
    - cd PROJECT_NAME
    - Within the project folder, run command "bundle install" to install the project gems and plug-ins 
3. Start local server:
- ./start.sh

## File Structure:
_data

    colors.yml
    config.yml
    nav.yml

_includes

    partials
        lib
            header.html
            footer.html
            nav.html
        proto
            header.html
            footer.html
        breadcrumbs.html
        head.html
        left-nav.html
    patterns
        patterns.scss

_layouts

    default.html
    full-width.html
    left-rail.html
    pattern.html
    template.html

_pages

    about
    guidance
    patterns
    prototype
    styles
    templates

assets

    css
        breadcrumbs.scss
        colors.scss
        footer.scss
        global.scss
        grid.scss
        header.scss
        left-nav.scss
        library.scss
        nav.scss
        styles.scss
        syntax.scss
        template.scss
        type.scss
    js
        nav_mobile.js
        template_img.js
    img

_site

_config.yml

freeform.gemspec

gemfile

gemfile.lock

index.md

