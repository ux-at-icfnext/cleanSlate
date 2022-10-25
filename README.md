# Nex+ Pattern Library

## About:
This basekit pattern library is built using Jekyll 4.0 built on the ruby gem 3.1.2 version. Node.js + Gulp are used to compile USWDS 3.0.

## Getting Started
### Pre-Requisites
- Node.js (version 16 or newer)
- Ruby gem version 3.1.2

## How to install ruby 3.1.2:
 **Recommendation:** Install a ruby gems bundler that will allow for you to install the specific version of ruby needed for your project and manage ruby versions on your computer (ex. chruby and ruby-installer)
    - Chruby and ruby-installer set-up documentation: https://mac.install.guide/ruby/12.html

## Install Library:
1. Clone GitHub Repository
    $ git clone https://github.com/ux-at-icfnext/next.git
2. On your local, change directory to pattern library
    $ cd next
3. To install project gems and plug-ins, run command:
    $ bundle install
4. Install node modules
     $ npm install
5. Initialize local environment, compile USWDS, and run local server:
    $ npm run init

## Compile code:
    $ npm run compile

## Adding images to the library:
- Custom images should be added to the: /assets/icons folder
Note: /assets/img folder is uswds images folder that is installed during the environment initialization (step 4) and should not be altered

## File Structure:
_data

    colors.yml
    config.yml
    nav.yml

_includes

    partials
        lib -- library structure components
        breadcrumbs.html
        footer.html
        header.html
        nav.html
        head.html
        left-nav.html
    patterns -- components and design files
        patterns.scss -- imports all component styles in the patterns folder 

_layouts -- page layouts

    default.html
    full-width.html
    left-rail.html
    pattern.html
    template.html

_pages -- pattern library pages

    about
    guidance
    patterns
    prototype
    styles
    templates

admin -- NetlifyCMS set-up

    config.yml
    index.html

assets

    css -- custom library css
    js -- custom library js
    icons -- custom library images
        <strong>Note: Add custom images to this folder</strong>
    img -- uswds images 
    uswds -- fonts and js
