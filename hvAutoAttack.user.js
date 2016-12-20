



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-b5b2bdade1c8f08cb8817cb4e73677eec388f755aebad89e0d686904a0492b84.css" integrity="sha256-tbK9reHI8Iy4gXy05zZ37sOI91WuutieDWhpBKBJK4Q=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2e72871df0dc404bd4d28dd7992b6dd299e03526cff5bb6455db8a9ef10fcb26.css" integrity="sha256-LnKHHfDcQEvU0o3XmStt0pngNSbP9btkVduKnvEPyyY=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>UserJs/hvAutoAttack.user.js at master · dodying/UserJs</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/13816909?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="dodying/UserJs" name="twitter:title" /><meta content="Contribute to UserJs development by creating an account on GitHub." name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/13816909?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="dodying/UserJs" property="og:title" /><meta content="https://github.com/dodying/UserJs" property="og:url" /><meta content="Contribute to UserJs development by creating an account on GitHub." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTQzMDkxMzczOmM5ODM1NmRhZDIzMmM1MzM1NTAxOGY2NmIyZmQ3ODQ4MmYxOTRkZjExYzM4MjdlNjZjODRkZjAyZGJiN2NmNDE=--d1b98e064f6873dc38ded69b746d75deb870b2d4">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="24E7AA8F:C3EE:A64116C:58591F16" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="24E7AA8F:C3EE:A64116C:58591F16" name="octolytics-dimension-request_id" /><meta content="24671496" name="octolytics-actor-id" /><meta content="ztdnae" name="octolytics-actor-login" /><meta content="d9c6da6bae85c017e3421e735ee1b28cf12ed949421eba98241095fecb301568" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension3" content="desktop">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="ztdnae">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NGNmNzA5NmZkYTRjODcyMGUzNzIzYzNhNTliYjNjN2NjMjU0OTkxMzg3OGIwNmYxZjQxYWE4OGQ4YTQwZjIxOHx7InJlbW90ZV9hZGRyZXNzIjoiMzYuMjMxLjE3MC4xNDMiLCJyZXF1ZXN0X2lkIjoiMjRFN0FBOEY6QzNFRTpBNjQxMTZDOjU4NTkxRjE2IiwidGltZXN0YW1wIjoxNDgyMjM1Njc4LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="ef190734921cb177a476fb229f2ff5a49e392901">
    <meta content="f6e36205b6c979dd8ef01be4a8b1d513638ae761" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="368512edfa449304577e4f32dd10c1cd">
    

      
  <meta name="description" content="Contribute to UserJs development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/dodying/UserJs git https://github.com/dodying/UserJs.git">

  <meta content="13816909" name="octolytics-dimension-user_id" /><meta content="dodying" name="octolytics-dimension-user_login" /><meta content="58132163" name="octolytics-dimension-repository_id" /><meta content="dodying/UserJs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="58132163" name="octolytics-dimension-repository_network_root_id" /><meta content="dodying/UserJs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/dodying/UserJs/commits/master.atom" rel="alternate" title="Recent Commits to UserJs:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/dodying/UserJs/blob/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production  vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    

      <div class="mobile-banner">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="y+AKw1lFCAQ53RUspTAF2rp13HOoc8roP7W9eyLtF+zXFZmvYrA5FeJ1aFC/dNTYr3GdnM2XqZU3PRdvbRTkNw==" /></div>
          <input type="hidden" name="mobile" value="true">
          <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

          <button type="submit" class="switch-to-mobile" data-ga-click="Mobile, switch to mobile, switch button">
            <svg aria-hidden="true" class="octicon octicon-device-mobile" height="64" version="1.1" viewBox="0 0 10 16" width="40"><path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"/></svg>
            Switch to mobile version
          </button>
</form>      </div>


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/search" class="js-site-search-form" data-scoped-search-url="/dodying/UserJs/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="dodying/UserJs">This repository</span>
  </div>
    <a class="dropdown-item" href="/dodying/UserJs/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/ztdnae"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@ztdnae" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/24671496?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">ztdnae</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/ztdnae" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/ztdnae?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bbUhYKjX3ehQh3AIf7UFrRDtMay1yQNN5itSCiydcpxxQLIMkyLs+YsvDXRl8dSvBelwQ9AtYDDuo/geY2SBRw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RIpDJgIO7C3Lb2HSsplCwGsWbKrVwU2Dtp2hcfUkZSlYf9BKOfvdPBDHHK6o3ZPCfhItRbAlLv6+FQtlut2W8g==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="58132163" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/dodying/UserJs/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/dodying/UserJs/watchers"
            aria-label="4 users are watching this repository">
            4
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/unstar" class="starred" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="70A8xVNWUovXt1izUDlb/LvZjpG1MsIjQmmqlPunhdvzta+paKNjmgwfJc9KfYr+rt3PftDWoV5K4QCAtF52AA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar dodying/UserJs"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/dodying/UserJs/stargazers"
           aria-label="9 users starred this repository">
          9
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/star" class="unstarred" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NNkSNm7JOJoMUuSxEfA/TjBNpqoBviHj824gVG2xu18oLIFaVTwJi9f6mc0LtO5MJUnnRWRaQp775opAIkhIhA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star dodying/UserJs"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/dodying/UserJs/stargazers"
           aria-label="9 users starred this repository">
          9
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/fork" class="btn-with-count" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7iSX8DFMZ7aJL21AfDushwD/B1fQQJZ/PV08BOrnByXy0QScCrlWp1KHEDxmf32FFftGuLWk9QI11ZYQpR70/g==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of dodying/UserJs to your account"
                aria-label="Fork your own copy of dodying/UserJs to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/dodying/UserJs/network" class="social-count"
       aria-label="4 users forked this repository">
      4
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/dodying" class="url fn" rel="author">dodying</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/dodying/UserJs" data-pjax="#js-repo-pjax-container">UserJs</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/dodying/UserJs" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /dodying/UserJs" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/dodying/UserJs/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /dodying/UserJs/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/dodying/UserJs/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /dodying/UserJs/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/dodying/UserJs/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /dodying/UserJs/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/dodying/UserJs/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /dodying/UserJs/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/dodying/UserJs/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /dodying/UserJs/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/dodying/UserJs/blob/24c20902871b69c2d6a5b4c94521abe317a24552/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:85a7405a0407fa57b218dc2c916660aa -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/dodying/UserJs/blob/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/dodying/UserJs/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/dodying/UserJs"><span>UserJs</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/dodying/UserJs/tree/master/HentaiVerse"><span>HentaiVerse</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/dodying/UserJs/tree/master/HentaiVerse/hvAutoAttack"><span>hvAutoAttack</span></a></span><span class="separator">/</span><strong class="final-path">hvAutoAttack.user.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/dodying/UserJs/commit/21f6cfcf2e688bf592feda6578d836ea0e67e885" data-pjax>
          21f6cfc
        </a>
        <relative-time datetime="2016-11-29T04:41:32Z">Nov 29, 2016</relative-time>
      </span>
      <div>
        <img alt="@dodying" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/13816909?v=3&amp;s=40" width="20" />
        <a href="/dodying" class="user-mention" rel="author">dodying</a>
          <a href="/dodying/UserJs/commit/21f6cfcf2e688bf592feda6578d836ea0e67e885" class="message" data-pjax="true" title="v2.65b">v2.65b</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@dodying" height="24" src="https://avatars2.githubusercontent.com/u/13816909?v=3&amp;s=48" width="24" />
            <a href="/dodying">dodying</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/dodying/UserJs/raw/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/dodying/UserJs/blame/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/dodying/UserJs/commits/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/edit/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="inline-form js-update-url-with-hash" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o3tBrq4D/kS0m/vVsCN6BEUOeFKltvbi5hvdmcz29ry/jtLClfbPVW8zhqmqZ6sGUAo5vcBSlZ/uk3eNgw8FZw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/dodying/UserJs/delete/master/HentaiVerse/hvAutoAttack/hvAutoAttack.user.js" class="inline-form" data-form-nonce="f6e36205b6c979dd8ef01be4a8b1d513638ae761" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="p80lXv3R1dv/UX4To4wW/+7/yGAB/PnVj4xhqv9//jy7OLYyxiTkyiT5A2+5yMf9+/uJj2QYmqiHBMu+sIYN5w==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1925 lines (1924 sloc)
      <span class="file-info-divider"></span>
    88.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ==UserScript==</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @name         hvAutoAttack</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @name:zh-TW   【HV】打怪</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @name:zh-CN   【HV】打怪</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @description  HV auto attack script, for the first user, should configure before use it.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @description:zh-CN HV自动打怪脚本，初次使用，请先设置好选项，请确认字体设置正常</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @description:zh-TW HV自動打怪腳本，初次使用，請先設置好選項，請確認字體設置正常</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @include      http://*hentaiverse.org/*</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @exclude      http://*hentaiverse.org/pages/showequip.php?*</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @author       Dodying</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @namespace    https://github.com/dodying/UserJs</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @supportURL   https://github.com/dodying/UserJs/issues</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @icon         https://raw.githubusercontent.com/dodying/UserJs/master/Logo.png</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @version      2.65b</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @compatible   Firefox with Greasemonkey</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @compatible   Chrome with Tampermonkey</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @compatible   Android with Firefox and usi</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @grant        unsafeWindow</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @run-at       document-end</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ==/UserScript==</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> <span class="pl-en">init</span>() {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img[src=&quot;http://ehgt.org/g/derpy.gif&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">5</span> <span class="pl-k">*</span> <span class="pl-c1">60</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>));</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">langPack</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">lang</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (GM_info <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">version</span> <span class="pl-k">!==</span> <span class="pl-smi">GM_info</span>.<span class="pl-smi">script</span>.<span class="pl-c1">version</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">4</span>)) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">4</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">new</span> .<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionReset<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">langPack</span>(<span class="pl-en">prompt</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>请输入以下语言代码对应的数字<span class="pl-cce">\n</span>Please put in the number of your preferred language (0, 1 or 2)<span class="pl-cce">\n</span>0.简体中文<span class="pl-cce">\n</span>1.繁體中文<span class="pl-cce">\n</span>2.English<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.f2rb<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">5</span>])) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>https://greasyfork.org/zh-CN/forum/discussion/comment/27107/#Comment_27107<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlecounter<span class="pl-pds">&#39;</span></span>)) { <span class="pl-c"><span class="pl-c">//</span>需要答题</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">riddleAlert</span>(); <span class="pl-c"><span class="pl-c">//</span>答题警报</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#navbar<span class="pl-pds">&#39;</span></span>)) { <span class="pl-c"><span class="pl-c">//</span>战斗中</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">attackStatus</span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">pauseButton</span>) <span class="pl-en">pauseButton</span>();</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">pauseHotkey</span>) <span class="pl-en">pauseHotkey</span>();</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">reloader</span>) <span class="pl-en">reloader</span>();</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">main</span>();</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> { <span class="pl-c"><span class="pl-c">//</span>非战斗</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">delValue</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">quickSite</span>();</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">damageAlert</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div[style=&quot;margin:5px 0 0; color:#FA9300&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Error<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">22</span>]);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">autoArena</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.fd4&gt;div<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">0</span>]) <span class="pl-k">&gt;</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">staminaNow</span>)) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">autoArena</span>();</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">autoArenaTime</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">}) ();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">main</span>() { <span class="pl-c"><span class="pl-c">//</span>主程序</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>)) { <span class="pl-c"><span class="pl-c">//</span>如果禁用</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">6</span>];</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.clb&gt;button<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">7</span>];</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">stamina</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.fd4&gt;div<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">0</span>]) <span class="pl-k">&lt;=</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">staminaNow</span>)) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">pauseChange</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Error<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">19</span>]);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>, <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm1<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> monsterDead <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img[src*=&quot;nbardead&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">-</span> monsterDead);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAll<span class="pl-pds">&#39;</span></span>, <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm2[style^=&quot;background&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> bossDead <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm1[style*=&quot;opacity&quot;] div.btm2[style*=&quot;background&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">-</span> bossDead);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">countRound</span>(); <span class="pl-c"><span class="pl-c">//</span>回合计数及自动前进并获取怪物总HP</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>));</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">8</span>]);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAATab-Othcer<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">zIndex</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAFix<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> bar <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.cwb2<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span>, bar[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">120</span> <span class="pl-k">*</span> <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mp<span class="pl-pds">&#39;</span></span>, bar[<span class="pl-c1">1</span>].<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">120</span> <span class="pl-k">*</span> <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>, bar[<span class="pl-c1">2</span>].<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">120</span> <span class="pl-k">*</span> <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">parseInt</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.cwbt2<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerText</span>));</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">battleInfo</span>(); <span class="pl-c"><span class="pl-c">//</span>战斗战况</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">countMonsterHP</span>(); <span class="pl-c"><span class="pl-c">//</span>统计怪物血量</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">delayAlert</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>delayAlert<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">delayAlertTime</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>));</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">delayReload</span>) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>delayReload<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">delayReloadTime</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>));</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>)) <span class="pl-en">autoUseGem</span>(); <span class="pl-c"><span class="pl-c">//</span>自动使用宝石</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">deadSoon</span>(); <span class="pl-c"><span class="pl-c">//</span>自动回血回魔</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">scroll</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">scrollRoundNow</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>scrollRoundType_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>)]) <span class="pl-en">autoUseScroll</span>(); <span class="pl-c"><span class="pl-c">//</span>自动使用卷轴</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkill</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkillAllRound</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkillMonster</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkillBoss</span>)) <span class="pl-en">autoUseBuffSkill</span>(); <span class="pl-c"><span class="pl-c">//</span>自动使用药水、施法增益技能</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">infusion</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">infusionRoundNow</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>infusionRoundType_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>)]) <span class="pl-en">autoUseInfusions</span>(); <span class="pl-c"><span class="pl-c">//</span>自动使用魔药</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">debuffSkill</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">debuffSkillMode</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">debuffSkillMode</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>))) <span class="pl-en">autoUseDeSkill</span>(); <span class="pl-c"><span class="pl-c">//</span>自动施法De技能</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">autoAttack</span>(); <span class="pl-c"><span class="pl-c">//</span>自动打怪</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">langPack</span>(<span class="pl-smi">lang</span>) { <span class="pl-c"><span class="pl-c">//</span>语言包</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> packs <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">    { <span class="pl-c"><span class="pl-c">//</span>简体中文</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">      all<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请设置hvAutoAttack<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>0</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>是否继续<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>1</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>注意，修复只是临时作用使脚本能够运行！<span class="pl-cce">\n</span>如果脚本能够继续运行请按取消！<span class="pl-cce">\n</span>是否继续？<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>2</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请选择攻击模式<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>3</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack版本更新，请重新设置<span class="pl-cce">\n</span>强烈推荐【重置设置】后再设置。<span class="pl-cce">\n\n</span>以下为更新内容<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>4</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请设置字体<span class="pl-cce">\n</span>使用默认字体可能使某些功能失效<span class="pl-cce">\n</span>如无法正确获取到oc值，导致相关的Spirit Stance无法正常开启<span class="pl-cce">\n</span>是否查看相关说明？<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>5</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack暂停中<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>6</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>继续<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>7</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请点击尝试修复<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>8</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>暂停<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>9</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请输入链接，必填<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>10</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请输入名称，可留空<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>11</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请输入图标，可留空<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>12</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>回复完成<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>13</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>竞技场开始<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>14</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请输入配置<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>15</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>如果您遭遇了Bug，请确认是否为最新版本（一些Bug可能在新版中被修复）<span class="pl-cce">\n</span>如果你觉得脚本很棒，那就送作者1Hath作为感谢<span class="pl-cce">\n</span>是否继续打开网页<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>16</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>如果询问是否允许，请选择允许<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>17</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>接下来将测试该音频<span class="pl-cce">\n</span>如果该音频无法播放或无法载入，请替换<span class="pl-cce">\n</span>请测试完成后再键入另一个音频<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>18</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>当前Stamina过低<span class="pl-cce">\n</span>或Stamina损失过多<span class="pl-cce">\n</span>导致脚本暂停<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>19</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请检查高亮的输入框是否填写正确<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>20</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>请检查音频文件的地址是否正确<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>21</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>装备损坏，请修复<span class="pl-pds">&#39;</span></span> <span class="pl-c"><span class="pl-c">//</span>22</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">      option<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack设置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>语言<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>主要选项<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>对自身技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>De技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>卷轴<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>魔药<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>警报<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>权重规则<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>掉落监测<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>导出<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>导入<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置设置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>应用<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>取消<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>主要</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0.使用Draught药水<span class="pl-cce">\n</span>1.使用宝石回复<span class="pl-cce">\n</span>2.使用（技能、）Potion药水回复<span class="pl-cce">\n</span>3.使用Elixir药水回复<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当技能与药水CD时，使用&lt;b&gt;Last Elixir&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;*攻击模式&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;暂停相关&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用按钮；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用热键：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;技能施放条件&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>中级：怪物存活数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>；高级：怪物存活数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当OC<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>且SP<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%，开启&lt;b&gt;Spirit Stance&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>防止脚本莫名暂停<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>页面停留<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒后，&lt;b&gt;警报&lt;/b&gt;；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒后，&lt;b&gt;刷新页面&lt;/b&gt;。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当&lt;b&gt;小马&lt;/b&gt;答题时间<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒，如果输入框为空则随机生成答案。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">18</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当Stamina≤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>时，脚本暂停并警报。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>在&lt;b&gt;任意页面&lt;/b&gt;停留<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒后，开始竞技场<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>开启<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>减少页面刷新，降低内存使用，感谢网友【zsp40088】提出<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答题单选<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>开启&lt;b&gt;掉落监测&lt;/b&gt;，记录装备的最低品质<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>开启&lt;b&gt;音频警报&lt;/b&gt;；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>开启&lt;b&gt;桌面通知&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">28</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>测试<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>或损失Stamina≥<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置竞技场<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>；选填，竞技场对应的等级(以,分隔)：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">32</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当装备损坏时，警报。<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>对自身技能</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>对自身技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>施放条件（有一个成立就行）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 总回合数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. Boss存活数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. 遭遇战中，怪物存活数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>增益技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（Buff不存在就施放的技能，按【施放顺序】排序）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>获得Channel时<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>，即施法只需1点MP，<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>先ReBuff<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>：buff存在≤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>回合时，重新使用该技能。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>再施放Channel技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（按【施放顺序】排序）：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>De技能</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>De技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（按【施放顺序】排序）<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>请选择模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0. 对所有怪施放<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 只对Boss施放<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>其他技能</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>注：本标签所有输入框皆表示阈值&lt;br&gt;1. OC值 2. 怪兽存活数 3. Boss存活数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他技能（按【施放顺序】排序）<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>友情小马炮：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>龙吼：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>请选择战斗风格：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1阶：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2阶（如果有）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3阶（如果有）：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>卷轴</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用卷轴<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>总体条件：当前回合数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>存在技能生成的Buff时，仍然使用卷轴。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当前回合数<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">6</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>魔药</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用魔药：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用条件：当前回合数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>魔药属性与&lt;a href=&quot;#hvAATab-Main&quot;&gt;主要选项&lt;/a&gt;里的攻击模式相同<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">7</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>警报</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>自定义警报<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>留空则使用默认音频<span class="pl-cce">\n</span>对于国内用户，建议使用自定义音频<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>默认：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>错误：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>失败：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答题：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>胜利：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">8</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>权重规则</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>权重规则<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>示例<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 每回合计算怪物当前血量，血量最低的设置初始血量为10，其他怪物为当前血量倍数*10<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. 初始权重与下述各Buff权重相加<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. 计算出最终权重，攻击权重最小的怪物<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4. 如果你对各Buff权重有特别见解，请务必<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>告诉我<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">9</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>掉落监测</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>掉落监测<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>名称<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>数目<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">10</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>其他</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>反馈：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当前状况：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>如果脚本长期暂停且网络无问题，请点击【临时修复】<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>当前回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>总回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>各怪物及状况：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>尝试修复<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">      status<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>物理<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>火<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>冰<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>雷<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>风<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>圣<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>暗<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">      roundType<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>战役模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ar<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>竞技场<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>rb<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>浴血擂台<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>gr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>压榨界<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iw<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>物品界<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ba<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>遭遇战<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">      info<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>运行次数：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>攻击模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>存活Boss：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>怪物：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">      notification<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>未知<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>页面停留过长时间<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">Error</span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>错误<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>某些错误发生了<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">        Failed<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>失败<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>游戏失败<span class="pl-cce">\n</span>玩家可自行查看战斗Log寻找失败原因<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        Riddle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答题<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>小马答题<span class="pl-cce">\n</span>紧急！<span class="pl-cce">\n</span>紧急！<span class="pl-cce">\n</span>紧急！<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">        Win<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>胜利<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>游戏胜利<span class="pl-cce">\n</span>页面将在3秒后刷新<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">3</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">      fightingStyle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>二天一流<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>单手<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>双手<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>双持<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>法杖<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">      new <span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>1. 感谢Koko191帮助翻译了英文版本<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>2. 增加了武器技能<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">    { <span class="pl-c"><span class="pl-c">//</span>繁體中文</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">      all<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請設置hvAutoAttack<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>是否繼續<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>注意，修復只是臨時作用使腳本能夠運行！<span class="pl-cce">\n</span>如果腳本能夠繼續運行請按取消！ <span class="pl-cce">\n</span>是否繼續？<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請選擇攻擊模式<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack版本更新，請重新設置<span class="pl-cce">\n</span>強烈推薦【重置設置】後再設置。<span class="pl-cce">\n\n</span>以下為更新內容<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請設置字體<span class="pl-cce">\n</span>使用默認字體可能使某些功能失效<span class="pl-cce">\n</span>如無法正確獲取到oc值，導致相關的Spirit Stance無法正常開啟<span class="pl-cce">\n</span>是否查看相關說明？<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack暫停中<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>繼續<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請點擊嘗試修復<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>暫停<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請輸入鏈接，必填<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請輸入名稱，可留空<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請輸入圖標，可留空<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>回复完成<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>競技場開始<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請輸入配置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>如果您遭遇了Bug，請確認是否為最新版本（一些Bug可能在新版中被修復）<span class="pl-cce">\n</span>如果你覺得腳本很棒，那就送作者1Hath作為感謝<span class="pl-cce">\n</span>是否繼續打開網頁<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>如果詢問是否允許，請選擇允許<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>接下來將測試該音頻<span class="pl-cce">\n</span>如果該音頻無法播放或無法載入，請替換<span class="pl-cce">\n</span>請測試完成後再鍵入另一個音頻<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>當前Stamina過低<span class="pl-cce">\n</span>或Stamina損失過多<span class="pl-cce">\n</span>導致腳本暫停<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請檢查高亮的輸入框是否填寫正確<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>請檢查音頻文件的地址是否正確<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>裝備損壞，請修復<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">      option<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack設置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>語言<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>主要選項<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>對自身技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>De技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>捲軸<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>魔藥<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>警報<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>權重規則<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>掉落監測<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>導出<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>導入<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置設置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>應用<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>取消<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>主要</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0.使用Draught藥水<span class="pl-cce">\n</span>1.使用寶石回复<span class="pl-cce">\n</span>2.使用（技能、）Potion藥水回复<span class="pl-cce">\n</span>3.使用Elixir藥水回复<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當技能與藥水CD時，使用&lt;b&gt;Last Elixir&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;*攻擊模式&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;暫停相關&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用按鈕；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用熱鍵：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;技能施放條件&lt;/b&gt;：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>中級：怪物存活數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>；高級：怪物存活數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當OC<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>且SP<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%，開啟&lt;b&gt;Spirit Stance&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>防止腳本莫名暫停<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>頁面停留<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒後，&lt;b&gt;警報&lt;/b&gt;；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒後，&lt;b&gt;刷新頁面&lt;/b&gt;。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當&lt;b&gt;小馬&lt;/b&gt;答題時間<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒，如果輸入框為空則隨機生成答案。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">18</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當Stamina＜<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>時，腳本暫停並警報。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>在&lt;b&gt;任意頁面&lt;/b&gt;停留<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>秒後，開始競技場<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>開啟<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>減少頁面刷新，降低內存使用，感謝網友【zsp40088】提出<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答題單選<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>開啟&lt;b&gt;掉落監測&lt;/b&gt;，記錄裝備的最低品質<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>開啟&lt;b&gt;音頻警報&lt;/b&gt;；<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>開啟&lt;b&gt;桌面通知&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">28</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>測試<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>或損失Stamina≥<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置競技場<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>；選填，競技場對應的等級(以,分隔)：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">32</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當裝備損壞時，警報。<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>對自身技能</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>對自身技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>施放條件（有一個成立就行）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 總回合數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. Boss存活數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. 遭遇戰中，怪物存活數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>增益技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（Buff不存在就施放的技能，按【施放順序】排序）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>獲得Channel時<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>，即施法只需1點MP，<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>先ReBuff<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>：buff存在≤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>回合時，重新使用該技能。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>再施放Channel技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（按【施放順序】排序）：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>De技能</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>De技能<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>（按【施放順序】排序）<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>請選擇模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0. 對所有怪施放<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 只對Boss施放<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>其他技能</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>注：本標籤所有輸入框皆表示閾值&lt;br&gt;1. OC值 2. 怪獸存活數 3. Boss存活數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>其他技能（按【施放順序】排序）<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>友情小馬炮：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>龍吼：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>請選擇戰鬥風格：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1階：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2階（如果有）：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3階（如果有）：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>捲軸</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用捲軸<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>總體條件：當前回合數<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>存在技能生成的Buff時，仍然使用捲軸。<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當前回合數<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">6</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>魔藥</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用魔藥：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>使用条件：当前回合数<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>魔藥屬性與&lt;a href=&quot;#hvAATab-Main&quot;&gt;主要選項&lt;/a&gt;裡的攻擊模式相同<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">7</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>警报</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>自定義警報<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>留空則使用默認音頻<span class="pl-cce">\n</span>對於國內用戶，建議使用自定義音頻<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>默認：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>錯誤：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>失敗：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答題：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>勝利：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">8</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>權重規則</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>權重規則<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>示例<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. 每回合計算怪物當前血量，血量最低的設置初始血量為10，其他怪物為當前血量倍數*10<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. 初始權重與下述各Buff權重相加<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. 計算出最終權重，攻擊權重最小的怪物<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4. 如果你對各Buff權重有特別見解，請務必<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>告訴我<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">9</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>掉落監測</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>掉落監測<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>重置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>名稱<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>數目<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">10</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>其他</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>反饋：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當前狀況：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>如果腳本長期暫停且網絡無問題，請點擊【臨時修復】<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>當前回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>總回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>各怪物及狀況：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>嘗試修復<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">      status<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>物理<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>火<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>冰<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>雷<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>風<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>聖<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>暗<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">      roundType<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>戰役模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ar<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>競技場<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>rb<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>浴血擂台<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>gr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>壓榨界<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iw<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>物品界<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ba<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>遭遇戰<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">      info<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>運行次數：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>回合：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>攻擊模式：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>存活Boss：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>怪物：<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">      notification<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>未知<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>頁面停留過長時間<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">Error</span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>錯誤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>某些錯誤發生了<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">        Failed<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>失敗<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>遊戲失敗<span class="pl-cce">\n</span>玩家可自行查看戰鬥Log尋找失敗原因<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">        Riddle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>答題<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>小馬答題<span class="pl-cce">\n</span>緊急！<span class="pl-cce">\n</span>緊急！<span class="pl-cce">\n</span>緊急！<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">        Win<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>勝利<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>遊戲勝利<span class="pl-cce">\n</span>頁面將在3秒後刷新<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">3</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">      fightingStyle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>二天一流<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>單手<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>雙手<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>雙持<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>法杖<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">      new <span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>1. 感謝Koko191幫助翻譯了英文版本<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>2. 增加了武器技能<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">    { <span class="pl-c"><span class="pl-c">//</span>English</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">      all<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please config this script<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Reset confirm?<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>This is only a temporary workaround!<span class="pl-cce">\n</span>If the script is running properly, please press Cancel!<span class="pl-cce">\n</span>Continue?<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please select the attack mode<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack version update, please reset<span class="pl-cce">\n</span>It is recommended to reset all configuration.<span class="pl-cce">\n\n</span>What<span class="pl-cce">\&#39;</span>s new in this update<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please set the font<span class="pl-cce">\n</span>The default font may make some functions fail to work<span class="pl-cce">\n</span>If you can not get the correct Overcharge value, Spirit Stance may not work<span class="pl-cce">\n</span>Do you want to see instructions?<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack Paused<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Continue<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Click [Try to fix]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Pause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please enter a link, required<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please enter a name, optional<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please enter an icon, optional<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Reply success<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Arena start<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please use a valid configuration<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>If you encounter a bug, check if you have the latest version (it may have been fixed in recent updates)<span class="pl-cce">\n</span>If you think the script is great, send the author 1 Hath as a thank you<span class="pl-cce">\n</span>Continue?<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please allow to receive notifications if you are asked for permission<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>The audio will be tested after you close this prompt<span class="pl-cce">\n</span>If the audio doesn<span class="pl-cce">\&#39;</span>t load or play, change the url<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Script paused<span class="pl-cce">\n</span>You either have too little Stamina or have lost too much<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please check if the highlighted input boxes are filled in correctly<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Please check if the audio file address is correct<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Damaged equipments, please repair<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">      option<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAutoAttack Configuration<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Language<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Main<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Supportive Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Deprecating Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Other Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Alarm<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Weight Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Drops Tracking<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Others<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Export<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Import<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Reset<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Apply<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>main</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0. Draughts<span class="pl-cce">\n</span>1. Gems<span class="pl-cce">\n</span>2. Potions (Or Cure/Full-Cure)<span class="pl-cce">\n</span>3. Elixirs<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Use &lt;b&gt;Last Elixir&lt;/b&gt; if all spells and potions are still in countdown.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;Attack Mode:&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;Pause with: &lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[Pause] button;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Hotkey: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;b&gt;Offensive Spells Conditions: &lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2nd Tier: Monsters alive <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>; 1st Tier: Monsters alive <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If OC <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> and SP <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%, activate &lt;b&gt;Spirit Stance&lt;/b&gt;.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>To prevent the script from stopping due to unforeseen problems<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If the page stays idle for <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s, &lt;b&gt;alarm&lt;/b&gt;; <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s, &lt;b&gt;reload page&lt;/b&gt;.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If &lt;b&gt;riddle&lt;/b&gt; ETR <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s and no answer has been chosen yet, a random answer will be generated.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">18</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If Stamina left ≤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, pause script and alarm.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Idle in &lt;b&gt;any page&lt;/b&gt; for <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s, start Arena<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Use built-in <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Reduce page refresh, reduce memory usage, and significantly increase clear speed, credits to [zsp40088]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Visit link for more details<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Turn on &lt;b&gt;Drops Tracking&lt;/b&gt;; Minimum drop quality: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Turn on &lt;b&gt;Alarms&lt;/b&gt;; <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Turn on &lt;b&gt;Notifications&lt;/b&gt;. <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">28</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Test<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> or Stamina lost ≥<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Reset arena<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>; Optional, input arena levels, separated by commas: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">32</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Alarm when equipments are damaged.<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>toSelf Skill</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Supportive Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Conditions (cast when at least 1 in 3 is satisfied)：<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. Total number of turns <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. Number of bosses alive <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. Number of monsters alive <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> (Cast or recast spells if the buff is not present, sorted in cast order):<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>During Channeling effect<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, which means 1mp spell cost and 150% spell damage, <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Recast if <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>spell effect expires in <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> turns.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>These skills will be casted during Channeling effect<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> (sorted in cast order):<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>DeSkill</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Deprecating Spells<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> (sort in cast order)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Spell targets: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0. All enemies<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. Bosses only<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Other Spells</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Note: All input fields in this label indicate thresholds&lt;br&gt;1. OC value 2. Monster survival number 3. Boss survival number<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Other Spells (Sort by cast order)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>OFC: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>FUS: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Please select the fighting style: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>T1: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>T2(if exist): <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>T3(if exist): <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Scroll</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Use Scrolls<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Conditions: Number of turns <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Use Scrolls even when there are effects from spells.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: Number of turns <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">6</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Infusion</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Use Infusion:<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Conditions: Number of turns <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> The style of infusion is the same as Attack Mode in &lt;a href=&quot;#hvAATab-Main&quot;&gt;Main&lt;/a&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">7</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Alarm</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Alarm<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Leave the box blank to use default audio<span class="pl-cce">\n</span>For Chinese users, it<span class="pl-cce">\&#39;</span>s recommended to use custom audio<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Default: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Error: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Defeat: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Riddle: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Victory: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">8</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Weight Rule</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Weight Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Example<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1. Each monster is assigned a number which is used to determine the target to attack, let<span class="pl-cce">\&#39;</span>s call that number Priority Weight or PW.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2. PW(X) = 10 * Max_HP(X) / Min(Max_HP(All_monsters)) + Accumulated_Weight_of_Deprecating_Spells_In_Effect(X)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3. Whichever monster has the lowest PW will be the target.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If you have any suggestions, please <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>let me know.<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">9</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>Drop monitoring</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Drops Tracking<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Reset<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">10</span><span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span>other</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Feedback: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Current status: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>If the script does not work and you are sure that it<span class="pl-cce">\&#39;</span>s not because of your internet, click [Try to fix]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Current round: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Total rounds: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Current battle info: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Try to fix<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">      status<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Physical<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Fire<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Cold<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Elec<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Wind<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Divine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Forbidden<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">      roundType<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Battle type: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ar<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>The Arena<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>rb<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Ring of Blood<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>gr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>GrindFest<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iw<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Item World<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>ba<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Random Encounter<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">      info<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Turns: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Round: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Mode: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Bosses: <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>Monsters: <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">      notification<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>The page stays idle for too long<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">Error</span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Error<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Some errors have occurred<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">        Failed<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Defeated<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>You have been defeated.<span class="pl-cce">\n</span>You can check the battle log.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">        Riddle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Riddle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Riddle<span class="pl-cce">\n</span>URGENT<span class="pl-cce">\n</span>URGENT<span class="pl-cce">\n</span>URGENT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">        Win<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Victory<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">          text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>You<span class="pl-cce">\&#39;</span>re victorious.<span class="pl-cce">\n</span>This page will refresh in 3 seconds.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">          time<span class="pl-k">:</span> <span class="pl-c1">3</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">      fightingStyle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Niten Ichiryu<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>One-Handed<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2-Handed Weapon<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Dual Wielding<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Staff<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">      new <span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>1. Thanks to Koko191 help to translate the English version<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>2. add weapon skills<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">      ],</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">  ];</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>, packs[lang]);</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">optionBox</span>();</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>select[name=lang]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> lang;</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">addStyle</span>() {</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> globalStyle <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">globalStyle</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.stuffbox{height:auto!important;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAALog{font-size:20px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAButton{top:4px;left:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.stuffbox<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">offsetWidth</span> <span class="pl-k">-</span> <span class="pl-c1">24</span> <span class="pl-k">-</span> <span class="pl-c1">50</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px;position:absolute;z-index:9999;cursor:pointer;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox{left:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> <span class="pl-c1">350</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px;top:50px;font-size:12pt!important;z-index:9999;width:700px;height:510px;display:none;position:absolute;text-align:justify;background-color:white;border:4px solid black;border-radius:10px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox .hvAACenter{text-align:center;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox .hvAASeparate{height:1px;background-color:black;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox .hvAATitle{font-weight:bolder;font-size:larger;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATablist{position:relative;left:14px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATabmenu{position:absolute;left:-9px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATabmenu&gt;span&gt;a{display:block;padding:5px 10px;margin:0 10px 0 0;border:1px solid #91a7b4;border-radius:5px;background-color:#E3F1F8;color:black;text-decoration:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATabmenu&gt;span:hover{z-index:999999!important;left:-5px;position:relative;font-size:large;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab{position:absolute;width:605px;height:400px;left:36px;padding:15px;border:1px solid #91A7B4;border-radius:3px;box-shadow:0 2px 3px rgba(0,0,0,0.1);font-size:14pt;color:#666;background:#FFF;overflow:auto;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab a{margin:0 2px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab b{font-family:&quot;Times New Roman&quot;,Georgia,Serif;font-size:20px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab:target{z-index:1!important;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab input[type=text]{width:24px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab label{cursor:pointer;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab table{font-size:smaller;border:2px solid black;border-collapse:collapse;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAATab table&gt;tbody&gt;tr&gt;*{border:1px solid black;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionBoxButton{position:relative;top:440px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionBoxButton&gt;button{margin:0 1px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>button{border-radius:3px;border:2px solid gray;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAANew{width:25px;height:25px;float:left;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAYAAACX8hZLAAAAcElEQVQ4jbVRSQ4AIQjz/59mTiZIF3twmnCwFAq4FkeFXM+5vCzohYxjPMtfxS8CN6iqQ7TfE0wrODxVbzJNgoaTo4CmbBO1ZWICouQ0DHaL259MEzaU+w8pZOdSjcUgaPJDHCbO0A2kuAiuwPGQ+wBms12x8HExTwAAAABJRU5ErkJggg==) no-repeat;background-position:center;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.siteBar{position:absolute;top:100px;left:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.stuffbox<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">offsetWidth</span> <span class="pl-k">+</span> <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px;font-size:12pt;text-align:left;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.siteBar&gt;span{display:block;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.siteBar&gt;span&gt;a{text-decoration:none;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.favicon{width:16px;height:16px;margin:-3px 1px;border:1px solid black;border-radius:3px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.answerBar{z-index:1000;width:710px;height:40px;position:absolute;top:50px;left:345px;display:table;border-spacing:5px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.answerBar&gt;div{border:4px solid red;display:table-cell;cursor:pointer;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.answerBar&gt;div:hover{background:rgba(63,207,208,0.20);}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>#hvAATab-Alarm input[type=text]{width:512px;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.testAlarms&gt;div{border:2px solid black;}<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>.hvAABorder{border:1px solid gray;}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(globalStyle);</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">optionBox</span>() { <span class="pl-c"><span class="pl-c">//</span>配置界面</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">addStyle</span>();</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> optionButton <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">optionButton</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAAButton<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">  optionButton.innerHTML = &#39;&lt;img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADi0lEQVRIiZVWPYgUZxj+dvGEk7vsNdPYCMul2J15n+d991PIMkWmOEyMyRW2FoJIUojYp5ADFbZJkyISY3EqKGpgz+Ma4bqrUojICaIsKGIXSSJcsZuD3RT3zWZucquXDwYG5n2f9/d5vnFuHwfAZySfAXgN4DXJzTiOj+3H90OnkmXZAe/9FMm3JJ8AuBGepyRfle2yLDvgnKt8EDVJkq8B3DGzjve+1m63p0n2AVzJbUh2SG455yre+5qZ/aCq983sxMfATwHYJvlCVYckHwFYVdURgO8LAS6RHJJcM7N1VR0CeE5yAGBxT3AR+QrA3wA20tQOq+pFkgOS90Tk85J51Xs9qaorqjoAcC6KohmSGyQHcRx/kbdv7AHgDskXaWqH0zSddc5Voyia2SOXapqmswsLvpam6ez8/Pwn+YcoimYAvARw04XZ5N8qZtZR1aGqXnTOVSd0cRd42U5EzqvqSFWX2u32tPd+yjnnXNiCGslHJAf7ybwM7r2vAdgWkYdZls157w+NK/DeT7Xb7WkAqyTvlZHjOD5oxgtmtqrKLsmze1VJsquqKwsLO9vnnKvkJHpLsq+qo/JAd8BtneTvqvqTiPwoIu9EZKUUpGpmi2Y2UtU+yTdJkhx1JJ8FEl0pruK/TrwA4F2r1WrkgI1G4wjJP0XkdLF9WaZzZnZZVa8GMj5xgf43JvXczFZbLb1ebgnJn0nenjQbEVkG0JsUYOykyi6Aa+XoQTJuTRr8OADJzVBOh+SlckYkz5L8Q0TquXOj0fhURN6r6pkSeAXAUsDaJPnYxXF8jOQrklskh97ryZJTVURWAPwF4DqAX0TkvRl/zTKdK2aeJMnxICFbAHrNZtOKVVdIrrVa2t1jz6sicprkbQC3VPVMGTzMpQvgQY63i8lBFddVdVCk/6TZlMFzopFci+P44H+YHCR3CODc/wUvDPY7ksMg9buZrKr3ATwvyoT3vrafzPP3er1eA9Azs7tjJhcqOBHkeSOKohkROR9K7prZYqnnlSRJjofhb4vIt/V6vUbyN1Xtt1qtb1zpZqs45xyAxXAnvCQ5FJGHqrpiZiMzu5xnHlZxCOABybXw3gvgp/Zq3/gA+BLATVVdyrJsbods2lfVq7lN4crMtapjZndD5pPBixWFLTgU7uQ3AJ6KyLKILAdy9sp25bZMBC//JSRJcjQIYg9Aj+TjZrNp+/mb+Ad711sdZZ1k/QAAAABJRU5ErkJggg==&gt;&lt;/img&gt;&#39;;</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">optionButton</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAABox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(optionButton);</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> optionBox <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">optionBox</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAABox<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">optionBox</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;hvAACenter&quot;&gt;&lt;h1 style=&quot;display:inline;&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h1&gt;&lt;div style=&quot;float:right;&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;select name=&quot;lang&quot;&gt;&lt;option value=&quot;0&quot;&gt;简体中文&lt;/option&gt;&lt;option value=&quot;1&quot;&gt;繁體中文&lt;/option&gt;&lt;option value=&quot;2&quot;&gt;English&lt;/option&gt;&lt;/select&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;hvAATablist&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;hvAATabmenu&quot;&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Main&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Self&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Debuff&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">4</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Skill&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">5</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Scroll&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">6</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Infusion&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">7</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Alarm&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">8</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;#hvAATab-Rule&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">9</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span class=&quot;hvAAShowDrop&quot;&gt;&lt;a href=&quot;#hvAATab-Drop&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">10</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;span class=&quot;hvAAShowOther&quot;&gt;&lt;a href=&quot;#hvAATab-Other&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">11</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Main&quot;class=&quot;hvAATab&quot;style=&quot;z-index:1;&quot;&gt;&lt;div class=&quot;hvAACenter hvAABorder&quot;title=&quot;&#39; + g(&#39;lang&#39;).option[1][0] + &#39;&quot;&gt;&lt;span style=&quot;color:green;&quot;&gt;HP: 0. &lt;input name=&quot;hp0&quot;placeholder=&quot;95&quot;type=&quot;text&quot;&gt;% 1. &lt;input name=&quot;hp1&quot;placeholder=&quot;50&quot;type=&quot;text&quot;&gt;% 2. &lt;input name=&quot;hp2&quot;placeholder=&quot;50&quot;type=&quot;text&quot;&gt;% 3. &lt;input name=&quot;hp3&quot;placeholder=&quot;5&quot;type=&quot;text&quot;&gt;% &lt;/span&gt;&lt;br&gt;&lt;span style=&quot;color:blue;&quot;&gt;MP: 0. &lt;input name=&quot;mp0&quot;placeholder=&quot;95&quot;type=&quot;text&quot;&gt;% 1. &lt;input name=&quot;mp1&quot;placeholder=&quot;70&quot;type=&quot;text&quot;&gt;% 2. &lt;input name=&quot;mp2&quot;placeholder=&quot;10&quot;type=&quot;text&quot;&gt;% 3. &lt;input name=&quot;mp3&quot;placeholder=&quot;5&quot;type=&quot;text&quot;&gt;% &lt;/span&gt;&lt;br&gt;&lt;span style=&quot;color:red;&quot;&gt;SP: 0. &lt;input name=&quot;sp0&quot;placeholder=&quot;95&quot;type=&quot;text&quot;&gt;% 1. &lt;input name=&quot;sp1&quot;placeholder=&quot;75&quot;type=&quot;text&quot;&gt;% 2. &lt;input name=&quot;sp2&quot;placeholder=&quot;50&quot;type=&quot;text&quot;&gt;% 3. &lt;input name=&quot;sp3&quot;placeholder=&quot;5&quot;type=&quot;text&quot;&gt;% &lt;/span&gt;&lt;br&gt;&lt;input id=&quot;lastElixir&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;lastElixir&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][1] + &#39;&lt;/div&gt;&lt;div id=&quot;attackStatus&quot;class=&quot;hvAACenter&quot;style=&quot;color:red;&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][2] + &#39;&lt;input type=&quot;radio&quot;id=&quot;aS0&quot;name=&quot;attackStatus&quot;value=&quot;0&quot;&gt;&lt;label for=&quot;aS0&quot;&gt;&#39; + g(&#39;lang&#39;).status[0] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS1&quot;name=&quot;attackStatus&quot;value=&quot;1&quot;&gt;&lt;label for=&quot;aS1&quot;&gt;&#39; + g(&#39;lang&#39;).status[1] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS2&quot;name=&quot;attackStatus&quot;value=&quot;2&quot;&gt;&lt;label for=&quot;aS2&quot;&gt;&#39; + g(&#39;lang&#39;).status[2] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS3&quot;name=&quot;attackStatus&quot;value=&quot;3&quot;&gt;&lt;label for=&quot;aS3&quot;&gt;&#39; + g(&#39;lang&#39;).status[3] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS4&quot;name=&quot;attackStatus&quot;value=&quot;4&quot;&gt;&lt;label for=&quot;aS4&quot;&gt;&#39; + g(&#39;lang&#39;).status[4] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS5&quot;name=&quot;attackStatus&quot;value=&quot;5&quot;&gt;&lt;label for=&quot;aS5&quot;&gt;&#39; + g(&#39;lang&#39;).status[5] + &#39;&lt;/label&gt;&lt;input type=&quot;radio&quot;id=&quot;aS6&quot;name=&quot;attackStatus&quot;value=&quot;6&quot;&gt;&lt;label for=&quot;aS6&quot;&gt;&#39; + g(&#39;lang&#39;).status[6] + &#39;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&#39; + g(&#39;lang&#39;).option[1][3] + &#39;&lt;input id=&quot;pauseButton&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;pauseButton&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][4] + &#39;&lt;/label&gt;&lt;input id=&quot;pauseHotkey&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;pauseHotkey&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][5] + &#39;&lt;input name=&quot;pauseHotkeyStr&quot;placeholder=&quot;A&quot;type=&quot;text&quot;&gt; &lt;input name=&quot;pauseHotkeyCode&quot;placeholder=&quot;65&quot;type=&quot;text&quot;disabled=&quot;true&quot;&gt;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&#39; + g(&#39;lang&#39;).option[1][6] + g(&#39;lang&#39;).option[1][7] + &#39;≥&lt;input name=&quot;middleSkill&quot;placeholder=&quot;3&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][8] + &#39;≥&lt;input name=&quot;highSkill&quot;placeholder=&quot;5&quot;type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;spiritStance&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;spiritStance&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][9] + &#39;≥&lt;input name=&quot;spiritStance_oc&quot;placeholder=&quot;50&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][10] + &#39;≥&lt;input name=&quot;spiritStance_sp&quot;placeholder=&quot;80&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][11] + &#39;&lt;/label&gt;&lt;/div&gt;&lt;div title=&quot;&#39; + g(&#39;lang&#39;).option[1][12] + &#39;&quot;&gt;&lt;input id=&quot;delayAlert&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;delayAlert&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][13] + &#39;&lt;input name=&quot;delayAlertTime&quot;placeholder=&quot;10&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][14] + &#39;&lt;/label&gt;&lt;input id=&quot;delayReload&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;delayReload&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][13] + &#39;&lt;input name=&quot;delayReloadTime&quot;placeholder=&quot;15&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][15] + &#39;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;riddleAnswer&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;riddleAnswer&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][16] + &#39;≤&lt;input name=&quot;riddleAnswerTime&quot;placeholder=&quot;3&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][17] + &#39;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;stamina&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;stamina&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][18] + &#39;&lt;input name=&quot;staminaNow&quot;placeholder=&quot;30&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][29] + &#39;&lt;input name=&quot;staminaLose&quot;placeholder=&quot;5&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][19] + &#39;&lt;/label&gt;&lt;/div&gt;&lt;div class=&quot;hvAABorder&quot;&gt;&lt;input id=&quot;autoArena&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;autoArena&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][20] + &#39;&lt;input name=&quot;autoArenaTime&quot;placeholder=&quot;60&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][21] + &#39;&lt;button class=&quot;autoArenaReset&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][30] + &#39;&lt;/button&gt;&#39; + g(&#39;lang&#39;).option[1][31] + &#39;&lt;input name=&quot;autoArenaLevels&quot;check=&quot;^[\\d,]+$&quot;type=&quot;text&quot;style=&quot;width:390px;&quot;&gt;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;reloader&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;reloader&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][22] + &#39;&lt;a href=&quot;https://forums.e-hentai.org/index.php?showtopic=65126&amp;st=2660&amp;p=4384894&amp;#entry4384894&quot;target=&quot;_blank&quot;title=&quot;&#39; + g(&#39;lang&#39;).option[1][23] + &#39;&quot;&gt;Reloader&lt;/a&gt;&lt;/label&gt;&lt;input id=&quot;riddleRadio&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;riddleRadio&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][22] + &#39;&lt;a href=&quot;https://forums.e-hentai.org/index.php?showtopic=65126&amp;st=1020&amp;p=3000982&amp;#entry3000982&quot;target=&quot;_blank&quot;title=&quot;&#39; + g(&#39;lang&#39;).option[1][24] + &#39;&quot;&gt;RiddleLimiter Plus&lt;/a&gt;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;dropMonitor&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;dropMonitor&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][25] + &#39;&lt;select name=&quot;dropQuality&quot;&gt;&lt;option value=&quot;0&quot;&gt;Crude&lt;/option&gt;&lt;option value=&quot;1&quot;&gt;Fair&lt;/option&gt;&lt;option value=&quot;2&quot;&gt;Average&lt;/option&gt;&lt;option value=&quot;3&quot;&gt;Superior&lt;/option&gt;&lt;option value=&quot;4&quot;&gt;Exquisite&lt;/option&gt;&lt;option value=&quot;5&quot;&gt;Magnificent&lt;/option&gt;&lt;option value=&quot;6&quot;&gt;Legendary&lt;/option&gt;&lt;option value=&quot;7&quot;&gt;Peerless&lt;/option&gt;&lt;/select&gt;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input id=&quot;alert&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;alert&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][26] + &#39;&lt;/label&gt;&lt;input id=&quot;notification&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;notification&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][27] + &#39;&lt;/label&gt;&lt;button class=&quot;testNotification&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][28] + &#39;&lt;/button&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;&lt;input id=&quot;damageAlert&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;damageAlert&quot;&gt;&#39; + g(&#39;lang&#39;).option[1][32] + &#39;&lt;/label&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Self&quot;class=&quot;hvAATab&quot;&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill&quot;&gt;&lt;label for=&quot;buffSkill&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;&#39; + g(&#39;lang&#39;).option[2][0] + &#39;&lt;/span&gt;&lt;/label&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[2][1] + &#39;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[2][2] + &#39;≥&lt;input name=&quot;buffSkillAllRound&quot;placeholder=&quot;12&quot;type=&quot;text&quot;&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[2][3] + &#39;≥&lt;input name=&quot;buffSkillBoss&quot;placeholder=&quot;1&quot;type=&quot;text&quot;&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[2][4] + &#39;≥&lt;input name=&quot;buffSkillMonster&quot;placeholder=&quot;6&quot;type=&quot;text&quot;&gt;&lt;br&gt;&lt;b&gt;&#39; + g(&#39;lang&#39;).option[2][5] + &#39;&lt;/b&gt;&#39; + g(&#39;lang&#39;).option[2][6] + &#39;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_HD&quot;&gt;&lt;label for=&quot;buffSkill_HD&quot;&gt;Health Draught&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_MD&quot;&gt;&lt;label for=&quot;buffSkill_MD&quot;&gt;Mana Draught&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_SD&quot;&gt;&lt;label for=&quot;buffSkill_SD&quot;&gt;Spirit Draught&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_Pr&quot;&gt;&lt;label for=&quot;buffSkill_Pr&quot;&gt;Protection&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_SL&quot;&gt;&lt;label for=&quot;buffSkill_SL&quot;&gt;Spark of Life&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_SS&quot;&gt;&lt;label for=&quot;buffSkill_SS&quot;&gt;Spirit Shield&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_Ha&quot;&gt;&lt;label for=&quot;buffSkill_Ha&quot;&gt;Haste&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_AF&quot;&gt;&lt;label for=&quot;buffSkill_AF&quot;&gt;Arcane Focus&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_He&quot;&gt;&lt;label for=&quot;buffSkill_He&quot;&gt;Heartseeker&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_Re&quot;&gt;&lt;label for=&quot;buffSkill_Re&quot;&gt;Regen&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_SV&quot;&gt;&lt;label for=&quot;buffSkill_SV&quot;&gt;Shadow Veil&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;buffSkill_Ab&quot;&gt;&lt;label for=&quot;buffSkill_Ab&quot;&gt;Absorb&lt;/label&gt;&lt;div&gt;&lt;/div&gt;&lt;b&gt;&#39; + g(&#39;lang&#39;).option[2][7] + &#39;&lt;/b&gt;&#39; + g(&#39;lang&#39;).option[2][8] + &#39;&lt;br&gt;&lt;b&gt;&#39; + g(&#39;lang&#39;).option[2][9] + &#39;&lt;/b&gt;&#39; + g(&#39;lang&#39;).option[2][10] + &#39;&lt;input name=&quot;channelReBuff&quot;placeholder=&quot;20&quot;type=&quot;text&quot;&gt;&#39; + g(&#39;lang&#39;).option[2][11] + &#39;&lt;br&gt;&lt;b&gt;&#39; + g(&#39;lang&#39;).option[2][12] + &#39;&lt;/b&gt;&#39; + g(&#39;lang&#39;).option[2][13] + &#39;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_Pr&quot;&gt;&lt;label for=&quot;channelSkill_Pr&quot;&gt;Protection&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_SL&quot;&gt;&lt;label for=&quot;channelSkill_SL&quot;&gt;Spark of Life&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_SS&quot;&gt;&lt;label for=&quot;channelSkill_SS&quot;&gt;Spirit Shield&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_Ha&quot;&gt;&lt;label for=&quot;channelSkill_Ha&quot;&gt;Haste&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_AF&quot;&gt;&lt;label for=&quot;channelSkill_AF&quot;&gt;Arcane Focus&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_He&quot;&gt;&lt;label for=&quot;channelSkill_He&quot;&gt;Heartseeker&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_Re&quot;&gt;&lt;label for=&quot;channelSkill_Re&quot;&gt;Regen&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_SV&quot;&gt;&lt;label for=&quot;channelSkill_SV&quot;&gt;Shadow Veil&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;channelSkill_Ab&quot;&gt;&lt;label for=&quot;channelSkill_Ab&quot;&gt;Absorb&lt;/label&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div id=&quot;hvAATab-Debuff&quot;class=&quot;hvAATab&quot;&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill&quot;&gt;&lt;label for=&quot;debuffSkill&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">3</span>][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">3</span>][<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">3</span>][<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;select name=&quot;debuffSkillMode&quot;&gt;&lt;option value=&quot;0&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">3</span>][<span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;&lt;option value=&quot;1&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">3</span>][<span class="pl-c1">4</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;&lt;/select&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_Im&quot;&gt;&lt;label for=&quot;debuffSkill_Im&quot;&gt;Imperil&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_MN&quot;&gt;&lt;label for=&quot;debuffSkill_MN&quot;&gt;MagNet&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_Si&quot;&gt;&lt;label for=&quot;debuffSkill_Si&quot;&gt;Silence&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_Dr&quot;&gt;&lt;label for=&quot;debuffSkill_Dr&quot;&gt;Drain&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_We&quot;&gt;&lt;label for=&quot;debuffSkill_We&quot;&gt;Weaken&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;debuffSkill_Co&quot;&gt;&lt;label for=&quot;debuffSkill_Co&quot;&gt;Confuse&lt;/label&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Skill&quot;class=&quot;hvAATab&quot;&gt;&lt;div class=&quot;hvAANew&quot;&gt;&lt;/div&gt;&#39; + g(&#39;lang&#39;).option[4][0] + &#39;&lt;br&gt;&lt;input id=&quot;skill&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][1] + &#39;&lt;/span&gt;&lt;/label&gt;&lt;br&gt;&lt;input id=&quot;skill_OFC&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill_OFC&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][2] + &#39;&lt;/label&gt;&lt;input name=&quot;skillOC_OFC&quot;placeholder=&quot;210&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillMonster_OFC&quot;placeholder=&quot;8&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillBoss_OFC&quot;placeholder=&quot;1&quot;type=&quot;text&quot;&gt;&lt;br&gt;&lt;input id=&quot;skill_FUS&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill_FUS&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][3] + &#39;&lt;/label&gt;&lt;input name=&quot;skillOC_FUS&quot;placeholder=&quot;110&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillMonster_FUS&quot;placeholder=&quot;8&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillBoss_FUS&quot;placeholder=&quot;1&quot;type=&quot;text&quot;&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[4][4] + &#39;&lt;select name=&quot;fightingStyle&quot;&gt;&lt;option value=&quot;1&quot;&gt;&#39; + g(&#39;lang&#39;).fightingStyle[1] + &#39;&lt;/option&gt;&lt;option value=&quot;2&quot;&gt;&#39; + g(&#39;lang&#39;).fightingStyle[2] + &#39;&lt;/option&gt;&lt;option value=&quot;3&quot;&gt;&#39; + g(&#39;lang&#39;).fightingStyle[3] + &#39;&lt;/option&gt;&lt;option value=&quot;4&quot;&gt;&#39; + g(&#39;lang&#39;).fightingStyle[4] + &#39;&lt;/option&gt;&lt;option value=&quot;5&quot;&gt;&#39; + g(&#39;lang&#39;).fightingStyle[5] + &#39;&lt;/option&gt;&lt;/select&gt;&lt;br&gt;&lt;input id=&quot;skill_3&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill_3&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][7] + &#39;&lt;/label&gt;&lt;input name=&quot;skillOC_3&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillMonster_3&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillOCBoss_3&quot;type=&quot;text&quot;&gt;&lt;br&gt;&lt;input id=&quot;skill_2&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill_2&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][6] + &#39;&lt;/label&gt;&lt;input name=&quot;skillOC_2&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillMonster_2&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillOCBoss_2&quot;type=&quot;text&quot;&gt;&lt;br&gt;&lt;input id=&quot;skill_1&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;skill_1&quot;&gt;&#39; + g(&#39;lang&#39;).option[4][5] + &#39;&lt;/label&gt;&lt;input name=&quot;skillOC_1&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillMonster_1&quot;type=&quot;text&quot;&gt;&lt;input name=&quot;skillOCBoss_1&quot;type=&quot;text&quot;&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Scroll&quot;class=&quot;hvAATab&quot;&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll&quot;&gt;&lt;label for=&quot;scroll&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;&#39; + g(&#39;lang&#39;).option[5][0] + &#39;&lt;/span&gt;&lt;/label&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).roundType[0] + &#39;&lt;input type=&quot;checkbox&quot;id=&quot;scrollRoundType_ar&quot;&gt;&lt;label for=&quot;scrollRoundType_ar&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;ar&#39;] + &#39;&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scrollRoundType_rb&quot;&gt;&lt;label for=&quot;scrollRoundType_rb&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;rb&#39;] + &#39;&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scrollRoundType_gr&quot;&gt;&lt;label for=&quot;scrollRoundType_gr&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;gr&#39;] + &#39;&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scrollRoundType_iw&quot;&gt;&lt;label for=&quot;scrollRoundType_iw&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;iw&#39;] + &#39;&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scrollRoundType_ba&quot;&gt;&lt;label for=&quot;scrollRoundType_ba&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;ba&#39;] + &#39;&lt;/label&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[5][1] + &#39;≥&lt;input name=&quot;scrollRoundNow&quot;placeholder=&quot;100&quot;type=&quot;text&quot;&gt;。&lt;br&gt;&lt;input id=&quot;scrollFirst&quot;type=&quot;checkbox&quot;&gt;&lt;label for=&quot;scrollFirst&quot;&gt;&#39; + g(&#39;lang&#39;).option[5][2] + &#39;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Go&quot;&gt;&lt;label for=&quot;scroll_Go&quot;&gt;Scroll of the Gods &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Go&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Av&quot;&gt;&lt;label for=&quot;scroll_Av&quot;&gt;Scroll of the Avatar &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Av&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Pr&quot;&gt;&lt;label for=&quot;scroll_Pr&quot;&gt;Scroll of Protection &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Pr&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Sw&quot;&gt;&lt;label for=&quot;scroll_Sw&quot;&gt;Scroll of Swiftness &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Sw&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Li&quot;&gt;&lt;label for=&quot;scroll_Li&quot;&gt;Scroll of Life &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Li&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Sh&quot;&gt;&lt;label for=&quot;scroll_Sh&quot;&gt;Scroll of Shadows &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Sh&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;br&gt;&lt;input type=&quot;checkbox&quot;id=&quot;scroll_Ab&quot;&gt;&lt;label for=&quot;scroll_Ab&quot;&gt;Scroll of Absorption &#39; + g(&#39;lang&#39;).option[5][3] + &#39;≥&lt;input name=&quot;scrollRound_Ab&quot;placeholder=&quot;0&quot;type=&quot;text&quot;&gt;&lt;/label&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div id=&quot;hvAATab-Infusion&quot;class=&quot;hvAATab&quot;&gt;&lt;input type=&quot;checkbox&quot;id=&quot;infusion&quot;&gt;&lt;label for=&quot;infusion&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">6</span>][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">6</span>][<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;checkbox&quot;id=&quot;infusionRoundType_ar&quot;&gt;&lt;label for=&quot;infusionRoundType_ar&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>ar<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;infusionRoundType_rb&quot;&gt;&lt;label for=&quot;infusionRoundType_rb&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>rb<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;infusionRoundType_gr&quot;&gt;&lt;label for=&quot;infusionRoundType_gr&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>gr<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;infusionRoundType_iw&quot;&gt;&lt;label for=&quot;infusionRoundType_iw&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>iw<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;input type=&quot;checkbox&quot;id=&quot;infusionRoundType_ba&quot;&gt;&lt;label for=&quot;infusionRoundType_ba&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">roundType</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>ba<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">6</span>][<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>≥&lt;input name=&quot;infusionRoundNow&quot;placeholder=&quot;100&quot;type=&quot;text&quot;&gt;。&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div id=&quot;hvAATab-Alarm&quot;class=&quot;hvAATab&quot;title=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input name=&quot;audio-default&quot;type=&quot;text&quot;&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input name=&quot;audio-Error&quot;type=&quot;text&quot;&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">4</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input name=&quot;audio-Failed&quot;type=&quot;text&quot;&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">5</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input name=&quot;audio-Riddle&quot;type=&quot;text&quot;&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">7</span>][<span class="pl-c1">6</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input name=&quot;audio-Win&quot;type=&quot;text&quot;&gt;&lt;div class=&quot;testAlarms&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Rule&quot;class=&quot;hvAATab&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;&#39; + g(&#39;lang&#39;).option[8][0] + &#39;&lt;/span&gt; &lt;a href=&quot;https://github.com/dodying/UserJs/blob/master/HentaiVerse/hvAutoAttack/README.md#权重规则&quot;target=&quot;_blank&quot;&gt;&#39; + g(&#39;lang&#39;).option[8][1] + &#39;&lt;/a&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[8][2] + &#39;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[8][3] + &#39;&lt;br&gt;Sleep:&lt;input name=&quot;weight_Sle&quot;placeholder=&quot;+5&quot;type=&quot;text&quot;&gt; Blind:&lt;input name=&quot;weight_Bl&quot;placeholder=&quot;+3&quot;type=&quot;text&quot;&gt; Slow:&lt;input name=&quot;weight_Slo&quot;placeholder=&quot;+3&quot;type=&quot;text&quot;&gt; Imperil:&lt;input name=&quot;weight_Im&quot;placeholder=&quot;-5&quot;type=&quot;text&quot;&gt; Coalesced Mana:&lt;input name=&quot;weight_CM&quot;placeholder=&quot;-5&quot;type=&quot;text&quot;&gt;&lt;br&gt;MagNet:&lt;input name=&quot;weight_MN&quot;placeholder=&quot;-4&quot;type=&quot;text&quot;&gt; Silence:&lt;input name=&quot;weight_Si&quot;placeholder=&quot;-4&quot;type=&quot;text&quot;&gt; Drain:&lt;input name=&quot;weight_Dr&quot;placeholder=&quot;-4&quot;type=&quot;text&quot;&gt; Weaken:&lt;input name=&quot;weight_We&quot;placeholder=&quot;-4&quot;type=&quot;text&quot;&gt; Confuse:&lt;input name=&quot;weight_Co&quot;placeholder=&quot;-1&quot;type=&quot;text&quot;&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[8][4] + &#39;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[8][5] + &#39;&lt;a href=&quot;#hvAATab-Other&quot;&gt;&#39; + g(&#39;lang&#39;).option[8][6] + &#39;&lt;/a&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div id=&quot;hvAATab-Drop&quot;class=&quot;hvAATab&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">9</span>][<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;&lt;button class=&quot;reMonitor&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">9</span>][<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">  &#39;&lt;div id=&quot;hvAATab-Other&quot;class=&quot;hvAATab&quot;&gt;&lt;span class=&quot;hvAAFeedback&quot;&gt;&#39; + g(&#39;lang&#39;).option[10][0] + &#39;&lt;a href=&quot;https://github.com/dodying/UserJs/issues/&quot;target=&quot;_blank&quot;&gt;1. GitHub&lt;/a&gt;&lt;a href=&quot;https://greasyfork.org/scripts/18482/feedback&quot;target=&quot;_blank&quot;&gt;2. GreasyFork&lt;/a&gt;&lt;a href=&quot;http://e-hentai.org/dmspublic/karma.php?u=2565471&quot;target=&quot;_blank&quot;&gt;3. +K&lt;/a&gt;&lt;a href=&quot;https://gitter.im/dodying/UserJs&quot;target=&quot;_blank&quot;&gt;4. Gitter&lt;/a&gt;&lt;/span&gt;&lt;div class=&quot;hvAASeparate&quot;&gt;&lt;/div&gt;&lt;div class=&quot;hvAACenter&quot;&gt;&lt;span class=&quot;hvAATitle&quot;&gt;&#39; + g(&#39;lang&#39;).option[10][1] + &#39;&lt;/span&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[10][2] + &#39;&lt;br&gt;&#39; + g(&#39;lang&#39;).roundType[0] + &#39;&lt;select class=&quot;hvAADebug&quot;name=&quot;roundType&quot;&gt;&lt;option&gt;&lt;/option&gt;&lt;option value=&quot;ar&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;ar&#39;] + &#39;&lt;/option&gt;&lt;option value=&quot;rb&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;rb&#39;] + &#39;&lt;/option&gt;&lt;option value=&quot;gr&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;gr&#39;] + &#39;&lt;/option&gt;&lt;option value=&quot;iw&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;iw&#39;] + &#39;&lt;/option&gt;&lt;option value=&quot;ba&quot;&gt;&#39; + g(&#39;lang&#39;).roundType[&#39;ba&#39;] + &#39;&lt;/option&gt;&lt;/select&gt;&lt;br&gt;&#39; + g(&#39;lang&#39;).option[10][3] + &#39;&lt;input name=&quot;roundNow&quot;class=&quot;hvAADebug&quot;type=&quot;text&quot;placeholder=&quot;1&quot;&gt; &#39; + g(&#39;lang&#39;).option[10][4] + &#39;&lt;input name=&quot;roundAll&quot;class=&quot;hvAADebug&quot;type=&quot;text&quot;placeholder=&quot;1&quot;&gt;&lt;br&gt;&lt;b&gt;&#39; + g(&#39;lang&#39;).option[10][5] + &#39;&lt;/b&gt;&lt;div id=&quot;hvAAFixMonster&quot;&gt;&lt;/div&gt;&lt;button class=&quot;hvAAFix&quot;&gt;&#39; + g(&#39;lang&#39;).option[10][6] + &#39;&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&#39; +</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;&lt;div class=&quot;hvAAOptionBoxButton hvAACenter&quot;&gt;&lt;button class=&quot;hvAAOptionExport&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">12</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;button class=&quot;hvAAOptionImport&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">13</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;button class=&quot;hvAAOptionReset&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">14</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;button class=&quot;optionApply&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">15</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;button class=&quot;optionCancel&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">0</span>][<span class="pl-c1">16</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/button&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAShowDrop<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> drop <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>drop<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>) <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">9</span>][<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;&lt;td&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">option</span>[<span class="pl-c1">9</span>][<span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;&lt;/tr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> drop) {</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">      _html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;&lt;td&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;&lt;td&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> drop[i] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;&lt;/tr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">    _html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tbody&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">table</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> _html;</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAATab-Drop<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(table);</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">onclick</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAShowOther<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAADebug<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(inputs[i].<span class="pl-c1">name</span>)) inputs[i].<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-en">getValue</span>(inputs[i].<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> monsterStatus <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> span <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">span</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>id:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> monsterStatus[i].<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> &lt;input name=&quot;monsterStatus_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_HP&quot;class=&quot;hvAADebug&quot;type=&quot;text&quot;style=&quot;width:60px;&quot;&gt;&lt;br&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>, span).<span class="pl-c1">value</span> <span class="pl-k">=</span> monsterStatus[i].<span class="pl-smi">hp</span>;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAFixMonster<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-c1">appendChild</span>(span);</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">onclick</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[name=pauseHotkeyStr]<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onkeyup</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">65</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">90</span>) <span class="pl-k">?</span> <span class="pl-smi">e</span>.<span class="pl-smi">key</span>.<span class="pl-c1">toUpperCase</span>()  <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">key</span>;</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[name=pauseHotkeyCode]<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.autoArenaReset<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">1</span>])) {</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arena<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.testNotification<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">17</span>]);</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setNotice</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>testTitle<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>testBody<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> alarms <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[name^=&quot;audio&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">alarms</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">    alarms[i].<span class="pl-en">onchange</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">value</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>http(s)<span class="pl-k">?</span>:<span class="pl-k">|</span><span class="pl-k">^</span>ftp:<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-c1">this</span>.<span class="pl-c1">value</span>)) {</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">21</span>]);</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">18</span>]);</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> box <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">box</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> audio <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>audio<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">audio</span>.<span class="pl-smi">controls</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">audio</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">box</span>.<span class="pl-c1">appendChild</span>(audio);</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.testAlarms<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(box);</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">audio</span>.<span class="pl-c1">play</span>();</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAFeedback<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">16</span>])) <span class="pl-c1">window</span>.<span class="pl-c1">open</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">href</span>);</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.reMonitor<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">1</span>])) {</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>drop<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAFix<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">2</span>])) {</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAADebug[name^=&quot;round&quot;]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">setValue</span>(inputs[i].<span class="pl-c1">name</span>, inputs[i].<span class="pl-c1">value</span> <span class="pl-k">||</span> inputs[i].<span class="pl-smi">placeholder</span>);</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> monsterStatus <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAFixMonster input.hvAADebug<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm1<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> i <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> (inputs[i]) <span class="pl-k">?</span> inputs[i].<span class="pl-c1">value</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100000<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionExport<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> textarea <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>textarea<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-c1">select</span>();</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-en">oncopy</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">textarea</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(textarea);</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-en">oncut</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">textarea</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(textarea);</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.stuffbox<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(textarea);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">textarea</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">textarea</span>.<span class="pl-smi">scrollHeight</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionImport<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> option <span class="pl-k">=</span> <span class="pl-en">prompt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">15</span>]);</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>option) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">1</span>])) <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, option);</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAAOptionReset<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">1</span>])) {</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.optionApply<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">highlight</span>(<span class="pl-smi">ele</span>, <span class="pl-smi">time</span>) {</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(ele, optionBox).<span class="pl-c1">style</span>.<span class="pl-c1">border</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1px solid red<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(ele, optionBox).<span class="pl-c1">style</span>.<span class="pl-c1">border</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">      }, time <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[name=attackStatus]:checked<span class="pl-pds">&#39;</span></span>, optionBox)) {</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">3</span>]);</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">highlight</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#attackStatus<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0.5</span>);</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _option <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_option</span>.<span class="pl-c1">version</span> <span class="pl-k">=</span> (GM_info) <span class="pl-k">?</span> <span class="pl-smi">GM_info</span>.<span class="pl-smi">script</span>.<span class="pl-c1">version</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>, <span class="pl-c1">4</span>)  <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input,select<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">className</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAADebug<span class="pl-pds">&#39;</span></span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (inputs[i].<span class="pl-smi">outerHTML</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>check=&quot;(<span class="pl-c1">.</span><span class="pl-k">*?</span>)&quot;<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(inputs[i].<span class="pl-smi">outerHTML</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>check=&quot;(<span class="pl-c1">.</span><span class="pl-k">*?</span>)&quot;<span class="pl-pds">/</span></span>) [<span class="pl-c1">1</span>]).<span class="pl-c1">test</span>(inputs[i].<span class="pl-c1">value</span>) <span class="pl-k">||</span> inputs[i].<span class="pl-c1">value</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">            _option[inputs[i].<span class="pl-c1">name</span>] <span class="pl-k">=</span> inputs[i].<span class="pl-c1">value</span> <span class="pl-k">||</span> inputs[i].<span class="pl-smi">placeholder</span>;</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">20</span>]);</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">highlight</span>(inputs[i], <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">          _option[inputs[i].<span class="pl-c1">name</span>] <span class="pl-k">=</span> inputs[i].<span class="pl-c1">value</span> <span class="pl-k">||</span> inputs[i].<span class="pl-smi">placeholder</span>;</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>checkbox<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">        _option[inputs[i].<span class="pl-c1">id</span>] <span class="pl-k">=</span> inputs[i].<span class="pl-c1">checked</span>;</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> ((inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>radio<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> inputs[i].<span class="pl-c1">checked</span>) <span class="pl-k">||</span> inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>select-one<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">        _option[inputs[i].<span class="pl-c1">name</span>] <span class="pl-k">=</span> inputs[i].<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, _option);</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">optionBox</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.optionCancel<span class="pl-pds">&#39;</span></span>, optionBox).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">optionBox</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(optionBox);</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _option <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input,select<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, optionBox);</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (_option[inputs[i].<span class="pl-c1">name</span>] <span class="pl-k">||</span> _option[inputs[i].<span class="pl-c1">id</span>]) {</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>select-one<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">          inputs[i].<span class="pl-c1">value</span> <span class="pl-k">=</span> _option[inputs[i].<span class="pl-c1">name</span>];</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>checkbox<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">          inputs[i].<span class="pl-c1">checked</span> <span class="pl-k">=</span> _option[inputs[i].<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (inputs[i].<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>radio<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">          (_option[inputs[i].<span class="pl-c1">name</span>] <span class="pl-k">===</span> inputs[i].<span class="pl-c1">value</span>) <span class="pl-k">?</span> inputs[i].<span class="pl-c1">checked</span> <span class="pl-k">=</span> <span class="pl-c1">true</span> <span class="pl-k">:</span> inputs[i].<span class="pl-c1">checked</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">riddleAlert</span>() { <span class="pl-c"><span class="pl-c">//</span>答题警报</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> riddleImg <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddleform&gt;div:nth-child(3)&gt;img<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">riddleImg</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">riddleImg</span>.<span class="pl-smi">src</span>;</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">riddleImg</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>700px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddleform+div<span class="pl-pds">&#39;</span></span>).<span class="pl-en">onmouseover</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">riddleImg</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/pages/ponychart.jpg<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddleform+div<span class="pl-pds">&#39;</span></span>).<span class="pl-en">onmouseout</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">riddleImg</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-smi">riddleImg</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Riddle<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>loop<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-en">onkeydown</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAAlert<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAAlert<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">49</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">51</span>) {</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">riddleSubmit</span>(<span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">+</span> <span class="pl-c1">16</span>));</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">65</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">67</span>) {</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">riddleSubmit</span>(<span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span>));</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">97</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">99</span>) {</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">riddleSubmit</span>(<span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">-</span> <span class="pl-c1">32</span>));</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">30</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> timeDiv <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlecounter&gt;div&gt;div<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> time <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">timeDiv</span>.<span class="pl-c1">length</span>; j <span class="pl-k">=</span> j <span class="pl-k">+</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">        time <span class="pl-k">=</span> (<span class="pl-c1">parseInt</span>(timeDiv[j].<span class="pl-c1">style</span>.<span class="pl-smi">backgroundPosition</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>0px -<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)) <span class="pl-k">/</span> <span class="pl-c1">12</span>).<span class="pl-c1">toString</span>() <span class="pl-k">+</span> time;</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">document</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> time;</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">riddleAnswer</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseInt</span>(time) <span class="pl-k">&lt;=</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">riddleAnswerTime</span>)) {</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlemaster<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> random <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>();</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (random <span class="pl-k">&lt;</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlemaster<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> <span class="pl-k">if</span> (random <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> <span class="pl-k">/</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlemaster<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>B<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlemaster<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddleform<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">submit</span>();</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">    }, i <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">riddleRadio</span>) {</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> options <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>B<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">    ];</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bar <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(<span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bar</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>answerBar<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">options</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> button <span class="pl-k">=</span> <span class="pl-smi">bar</span>.<span class="pl-c1">appendChild</span>(<span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">button</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> options[i];</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">button</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">riddleSubmit</span>(<span class="pl-c1">this</span>.<span class="pl-c1">value</span>);</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">riddleSubmit</span>(<span class="pl-smi">answer</span>) {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddlemaster<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> answer;</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#riddleform<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">submit</span>();</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">pauseButton</span>() { <span class="pl-c"><span class="pl-c">//</span>暂停按钮</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> button <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>button<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">button</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">9</span>];</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">button</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pauseChange<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">button</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">pauseChange</span>();</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.clb<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">insertBefore</span>(button, <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.clb&gt;.cbl<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">pauseHotkey</span>() { <span class="pl-c"><span class="pl-c">//</span>暂停热键</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> <span class="pl-en">pause</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>INPUT<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TEXTAREA<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">pauseHotkeyCode</span>)) {</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">pauseChange</span>();</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">reloader</span>) <span class="pl-c1">document</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>, pause, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">pauseChange</span>() { <span class="pl-c"><span class="pl-c">//</span>暂停状态更改</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.pauseChange<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">9</span>];</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">delValue</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">main</span>();</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.pauseChange<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">7</span>];</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">quickSite</span>() { <span class="pl-c"><span class="pl-c">//</span>快捷站点</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> siteBar <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">siteBar</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>siteBar<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">siteBar</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span&gt;&lt;a href=&quot;javascript:void()&quot;class=&quot;siteBarToggle&quot;&gt;&amp;lt;&amp;lt;&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;http://tieba.baidu.com/f?kw=hv网页游戏&quot;target=&quot;_blank&quot;&gt;&lt;img src=&quot;https://www.baidu.com/favicon.ico&quot; class=&quot;favicon&quot;&gt;&lt;/img&gt;贴吧&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;https://forums.e-hentai.org/index.php?showforum=76&quot;target=&quot;_blank&quot;&gt;&lt;img src=&quot;https://forums.e-hentai.org/favicon.ico&quot; class=&quot;favicon&quot;&gt;&lt;/img&gt;Forums&lt;/a&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>quickSite<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> quickSite <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>quickSite<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">quickSite</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">siteBar</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span&gt;&lt;a href=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> quickSite[i].<span class="pl-smi">url</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;target=&quot;_blank&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ((quickSite[i].<span class="pl-smi">fav</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> quickSite[i].<span class="pl-smi">fav</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;class=&quot;favicon&quot;&gt;&lt;/img&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> quickSite[i].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">siteBar</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span&gt;&lt;a href=&quot;javascript:void()&quot;class=&quot;siteBarReset&quot;&gt;Reset&lt;/a&gt;&lt;/span&gt;&lt;span&gt;&lt;a href=&quot;javascript:void()&quot;class=&quot;siteBarPlus&quot;&gt;+++&lt;/a&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.siteBarToggle<span class="pl-pds">&#39;</span></span>, siteBar).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> spans <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, siteBar);</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">spans</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">      spans[i].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-smi">innerText</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;&lt;<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">innerText</span> <span class="pl-k">=</span> (<span class="pl-c1">this</span>.<span class="pl-smi">innerText</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;&lt;<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;&lt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.siteBarReset<span class="pl-pds">&#39;</span></span>, siteBar).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">confirm</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">1</span>])) {</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>quickSite<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.siteBarPlus<span class="pl-pds">&#39;</span></span>, siteBar).<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> quickSite <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>quickSite<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>) <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-en">prompt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">10</span>]);</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>url) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-en">prompt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">11</span>]);</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> fav <span class="pl-k">=</span> <span class="pl-en">prompt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">12</span>]);</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">quickSite</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>url<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> url,</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> name,</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>fav<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> fav</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>quickSite<span class="pl-pds">&#39;</span></span>, quickSite);</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(siteBar);</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">reloader</span>() {</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> script <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">script</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>battleform<span class="pl-pds">&#39;</span></span>).<span class="pl-en">submit</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAAReloader<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">  }).<span class="pl-c1">toString</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)()<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(script);</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">a</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAAReloader<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">a</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">formSubmit</span>();</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(a);</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">formSubmit</span>() { <span class="pl-c"><span class="pl-c">//</span>基本来自https://forums.e-hentai.org/index.php?showtopic=65126&amp;st=2660&amp;p=4384894&amp;#entry4384894</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#battleform&gt;input<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> serializedForm <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">inputs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (i <span class="pl-k">!==</span> <span class="pl-c1">0</span>) serializedForm <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">    serializedForm <span class="pl-k">+=</span> inputs[i].<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> inputs[i].<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">post</span>(<span class="pl-smi">location</span>.<span class="pl-c1">href</span>, serializedForm, <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">clearTimeout</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>delayAlert<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">clearTimeout</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>delayReload<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-smi">response</span>;</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> replacements <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.cwbdv, .bte, #ckey_spirit, #ckey_defend, #togpane_magico, #togpane_magict, #togpane_item, #quickbar, #togpane_log<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> monsterReplacements <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#mkey_0, #mkey_1, #mkey_2, #mkey_3, #mkey_4, #mkey_5, #mkey_6, #mkey_7, #mkey_8, #mkey_9<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> existing <span class="pl-k">=</span> <span class="pl-en">gE</span>(replacements, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> newStuff <span class="pl-k">=</span> <span class="pl-en">gE</span>(replacements, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, data);</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-smi">existing</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">      existing[i].<span class="pl-c1">parentNode</span>.<span class="pl-c1">replaceChild</span>(newStuff[i], existing[i]);</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> existing <span class="pl-k">=</span> <span class="pl-en">gE</span>(monsterReplacements, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> newStuff <span class="pl-k">=</span> <span class="pl-en">gE</span>(monsterReplacements, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>, data);</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-smi">existing</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (existing[i].<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onclick<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> newStuff[i].<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onclick<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">        existing[i].<span class="pl-c1">parentNode</span>.<span class="pl-c1">replaceChild</span>(newStuff[i], existing[i]);</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btcp<span class="pl-pds">&#39;</span></span>, data)) <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btt<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">insertBefore</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btcp<span class="pl-pds">&#39;</span></span>, data), <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btt<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">firstChild</span>);</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">unsafeWindow</span>.<span class="pl-smi">battle</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">unsafeWindow.Battle</span>;</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">unsafeWindow</span>.<span class="pl-smi">battle</span>.<span class="pl-en">clear_infopane</span>();</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">main</span>();</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoArena</span>() { <span class="pl-c"><span class="pl-c">//</span>自动刷竞技场</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> dateNow <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">  dateNow <span class="pl-k">=</span> <span class="pl-smi">dateNow</span>.<span class="pl-c1">getUTCFullYear</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">dateNow</span>.<span class="pl-c1">getUTCMonth</span>() <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">dateNow</span>.<span class="pl-c1">getUTCDate</span>();</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> arena <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arena<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>) <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">arena</span>.<span class="pl-smi">date</span> <span class="pl-k">!==</span> dateNow) {</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">arena</span>.<span class="pl-smi">date</span> <span class="pl-k">=</span> dateNow;</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">delete</span> <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>;</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">delete</span> <span class="pl-smi">arena</span>.<span class="pl-smi">isOk</span>;</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arena<span class="pl-pds">&#39;</span></span>, arena);</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">arena</span>.<span class="pl-smi">isOk</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">arena</span>.<span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">arena</span>.<span class="pl-smi">array</span> <span class="pl-k">=</span> <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">arena</span>.<span class="pl-smi">array</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> levelArr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">1</span>, <span class="pl-c1">10</span>, <span class="pl-c1">20</span>, <span class="pl-c1">30</span>, <span class="pl-c1">40</span>, <span class="pl-c1">50</span>, <span class="pl-c1">60</span>, <span class="pl-c1">70</span>, <span class="pl-c1">80</span>, <span class="pl-c1">90</span>, <span class="pl-c1">100</span>, <span class="pl-c1">110</span>, <span class="pl-c1">120</span>, <span class="pl-c1">130</span>, <span class="pl-c1">140</span>, <span class="pl-c1">150</span>, <span class="pl-c1">165</span>, <span class="pl-c1">180</span>, <span class="pl-c1">200</span>, <span class="pl-c1">225</span>, <span class="pl-c1">250</span>, <span class="pl-c1">300</span>, <span class="pl-c1">501</span>);</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> arenaidArr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">1</span>, <span class="pl-c1">3</span>, <span class="pl-c1">5</span>, <span class="pl-c1">8</span>, <span class="pl-c1">9</span>, <span class="pl-c1">11</span>, <span class="pl-c1">12</span>, <span class="pl-c1">13</span>, <span class="pl-c1">15</span>, <span class="pl-c1">16</span>, <span class="pl-c1">17</span>, <span class="pl-c1">19</span>, <span class="pl-c1">20</span>, <span class="pl-c1">21</span>, <span class="pl-c1">23</span>, <span class="pl-c1">24</span>, <span class="pl-c1">26</span>, <span class="pl-c1">27</span>, <span class="pl-c1">28</span>, <span class="pl-c1">29</span>, <span class="pl-c1">32</span>, <span class="pl-c1">33</span>);</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">autoArenaLevels</span>) {</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> myLevel <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.clb&gt;.cit:nth-child(12) .fd4&gt;div<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">levelArr</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (myLevel <span class="pl-k">&lt;</span> levelArr[i]) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">arena</span>.<span class="pl-smi">array</span> <span class="pl-k">=</span> arenaidArr;</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">levelArr</span>.<span class="pl-c1">indexOf</span>(levelArr[i]);</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">      length <span class="pl-k">=</span> (length <span class="pl-k">&gt;</span> <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">length</span>) <span class="pl-k">?</span> <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">:</span> length;</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> length;</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> targetArr <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">autoArenaLevels</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> isTarget;</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">targetArr</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">        isTarget <span class="pl-k">=</span> <span class="pl-smi">levelArr</span>.<span class="pl-c1">indexOf</span>(<span class="pl-c1">parseInt</span>(targetArr[i]));</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (isTarget <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span>) <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">push</span>(arenaidArr[isTarget]);</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">post</span>(<span class="pl-smi">location</span>.<span class="pl-c1">href</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>recover=all<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () { <span class="pl-c"><span class="pl-c">//</span>回复</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">13</span>];</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">post</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>?s=Battle&amp;ss=ar<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>arenaid=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>[<span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>], <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">document</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">14</span>];</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">splice</span>( <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">arena</span>.<span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-smi">arena</span>.<span class="pl-smi">isOk</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>arena<span class="pl-pds">&#39;</span></span>, arena);</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">setAlert</span>(<span class="pl-smi">e</span>, <span class="pl-smi">times</span>) { <span class="pl-c"><span class="pl-c">//</span>发出警报</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">setNotice</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">notification</span>[e].<span class="pl-c1">title</span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">notification</span>[e].<span class="pl-c1">text</span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">notification</span>[e].<span class="pl-smi">time</span>);</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">alert</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> fileType <span class="pl-k">=</span> (<span class="pl-sr"><span class="pl-pds">/</span>Chrome<span class="pl-k">|</span>Safari<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>)) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.mp3<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.wav<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>var fileType = &#39;.mp3&#39;;</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> audio <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>audio<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">audio</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAAAlert<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">audio</span>.<span class="pl-smi">controls</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">audio</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>audio-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> e]) <span class="pl-k">?</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>audio-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> e] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://raw.githubusercontent.com/dodying/UserJs/master/HentaiVerse/hvAutoAttack/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> e <span class="pl-k">+</span> fileType;</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> times <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">audio</span>.<span class="pl-smi">loop</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> times <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _time <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">audio</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ended<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">      _time <span class="pl-k">=</span> _time <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (_time <span class="pl-k">===</span> times) {</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">audio</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(audio);</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">audio</span>.<span class="pl-c1">play</span>();</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (times <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>loop<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">audio</span>.<span class="pl-smi">loop</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">audio</span>.<span class="pl-c1">play</span>();</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">appendChild</span>(audio);</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-en">onmousemove</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">audio</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(audio);</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">countRound</span>() { <span class="pl-c"><span class="pl-c">//</span>回合计数及自动前进并获取怪物总HP</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>, <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">location</span>.<span class="pl-smi">search</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>ss=(<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-k">{2}</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>, <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> battleLog <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#togpane_log&gt;table&gt;tbody&gt;tr&gt;td:nth-child(3)<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">stamina</span> <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span>You lose <span class="pl-c1">\d</span><span class="pl-k">+</span> Stamina<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(battleLog[<span class="pl-c1">0</span>].<span class="pl-smi">innerText</span>)) {</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> losedStamina <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(battleLog[<span class="pl-c1">0</span>].<span class="pl-smi">innerText</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (losedStamina <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">staminaLose</span>) {</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">pauseChange</span>();</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Error<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">alert</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">all</span>[<span class="pl-c1">19</span>]);</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (battleLog[<span class="pl-smi">battleLog</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">innerHTML</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Battle Start!<span class="pl-pds">&#39;</span></span>) <span class="pl-en">delValue</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> monsterStatus <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-smi">battleLog</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">3</span>; i <span class="pl-k">&gt;</span> <span class="pl-smi">battleLog</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">3</span> <span class="pl-k">-</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>); i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> hp <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(battleLog[i].<span class="pl-smi">innerHTML</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>HP=<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(hp)) hp <span class="pl-k">=</span> monsterStatus[<span class="pl-smi">monsterStatus</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">hp</span>;</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">      monsterStatus[id] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> (id <span class="pl-k">===</span> <span class="pl-c1">9</span>) <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> id <span class="pl-k">+</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>isDead<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> hp</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">      id <span class="pl-k">=</span> id <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> round <span class="pl-k">=</span> battleLog[<span class="pl-smi">battleLog</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>].<span class="pl-smi">innerHTML</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\(</span>Round <span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\)</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> roundNow;</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> roundAll;</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ba<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-cce">\/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(round)) {</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">      roundNow <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">round</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">      roundAll <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">round</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\/</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">      roundNow <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">      roundAll <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>, roundNow);</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>, roundAll);</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>, roundNow);</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>, roundAll);</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">parseInt</span>(<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">parseInt</span>(<span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btcp<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">dropMonitor</span>) {</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> drop <span class="pl-k">=</span> <span class="pl-en">getValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>drop<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>) <span class="pl-k">||</span> {</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#startTime<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">toLocaleString</span>(),</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#0_Turn<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#1_Round<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#2_Battle<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#EXP<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>#Credit<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">      drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#0_Turn<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>#0_Turn<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> drop) <span class="pl-k">?</span> drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#0_Turn<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>)  <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">      drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#1_Round<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>#1_Round<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> drop) <span class="pl-k">?</span> drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#1_Round<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>)) drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#2_Battle<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>#2_Battle<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> drop) <span class="pl-k">?</span> drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#2_Battle<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> text;</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> item;</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; ; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">        text <span class="pl-k">=</span> battleLog[i].<span class="pl-smi">innerText</span>;</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (text <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>You are Victorious!<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>You gain <span class="pl-c1">\d</span><span class="pl-k">+</span> EXP!<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(text)) {</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">          drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#EXP<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">text</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>dropped <span class="pl-cce">\[</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>) Credits<span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(text)) {</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">          drop[<span class="pl-s"><span class="pl-pds">&#39;</span>#Credit<span class="pl-pds">&#39;</span></span>] <span class="pl-k">+=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">text</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\[</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>) Credits<span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>dropped <span class="pl-cce">\[</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(text)) {</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">          item <span class="pl-k">=</span> <span class="pl-smi">text</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\[</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>) [<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (battleLog[i].<span class="pl-smi">children</span>[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">color</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(255, 0, 0)<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> quality <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Crude<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Fair<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Average<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Superior<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Exquisite<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Magnificent<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Legendary<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Peerless<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">dropQuality</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">quality</span>.<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">text</span>.<span class="pl-c1">match</span>(quality[j])) {</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">                drop[item] <span class="pl-k">=</span> (item <span class="pl-k">in</span> drop) <span class="pl-k">?</span> drop[item] <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">            drop[item] <span class="pl-k">=</span> (item <span class="pl-k">in</span> drop) <span class="pl-k">?</span> drop[item] <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">      drop <span class="pl-k">=</span> <span class="pl-en">objSort</span>(drop);</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>drop<span class="pl-pds">&#39;</span></span>, drop);</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Failed<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">setAlert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Win<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">delValue</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">reload</span>();</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">3</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">battleInfo</span>() { <span class="pl-c"><span class="pl-c">//</span>战斗战况</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAALog<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-en">cE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">div</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hvAALog<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.clb<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">insertBefore</span>(div, <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.cit<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.hvAALog<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">info</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">info</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">info</span>[<span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">status</span>[<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>)] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">info</span>[<span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lang<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">info</span>[<span class="pl-c1">4</span>] <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>runtime<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>||<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>||<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAll<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoUseGem</span>() { <span class="pl-c"><span class="pl-c">//</span>自动使用宝石</span></td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> Gem <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onmouseover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>battle<span class="pl-c1">.</span>set_infopane_item<span class="pl-cce">\(\&#39;</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\&#39;</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (Gem <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Health Gem<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">hp1</span>) {</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (Gem <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Mana Gem<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">mp1</span>) {</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (Gem <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Spirit Gem<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">sp1</span>) {</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (Gem <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Mystic Gem<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ikey_p<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">deadSoon</span>() { <span class="pl-c"><span class="pl-c">//</span>自动回血回魔</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">mp2</span>) { <span class="pl-c"><span class="pl-c">//</span>自动回魔</span></td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Potion&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Potion&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">mp3</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Elixir&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Elixir&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">sp2</span>) { <span class="pl-c"><span class="pl-c">//</span>自动回精</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Potion&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Potion&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">sp3</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Elixir&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Elixir&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">hp2</span>) { <span class="pl-c"><span class="pl-c">//</span>自动回血</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>311<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>311<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>313<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>313<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Potion&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Potion&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">hp3</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Elixir&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Elixir&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">lastElixir</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Last Elixir&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Last Elixir&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoUseScroll</span>() { <span class="pl-c"><span class="pl-c">//</span>自动使用卷轴</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> scrollLib <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Go<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of the Gods<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absorb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img2<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shadowveil<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img3<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sparklife<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Av<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of the Avatar<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>haste<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img2<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>protection<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Pr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of Protection<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>protection<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Sw<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of Swiftness<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>haste<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Li<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of Life<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sparklife<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Sh<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of Shadows<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shadowveil<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Ab<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Scroll of Absorption<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>mult<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absorb<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> scrollFirst <span class="pl-k">=</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">scrollFirst</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_scroll<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> scrollLib) {</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>scroll_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i] <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> scrollLib[i].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>scrollRound_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i]) {</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">1</span>; j <span class="pl-k">&lt;=</span> scrollLib[i].<span class="pl-smi">mult</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> scrollLib[i][<span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> j] <span class="pl-k">+</span> scrollFirst <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> isUsed <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> isUsed <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>isUsed) {</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> scrollLib[i].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoUseBuffSkill</span>() { <span class="pl-c"><span class="pl-c">//</span>自动使用药水、施法增益技能</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> skillLib <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Pr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Protection<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>411<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>protection<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>SL<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Spark of Life<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>422<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sparklife<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>SS<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Spirit Shield<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>423<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>spiritshield<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Ha<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Haste<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>412<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>haste<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>AF<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Arcane Focus<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>432<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>arcanemeditation<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>He<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Heartseeker<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>431<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>heartseeker<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Re<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Regen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>312<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>regen<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>SV<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Shadow Veil<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>413<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shadowveil<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Ab<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Absorb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>421<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absorb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> name2Skill <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Protection<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Pr<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Spark of Life<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>SL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Spirit Shield<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>SS<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Hastened<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Ha<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Arcane Focus<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>AF<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Heartseeker<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>He<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Regen<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Re<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Shadow Veil<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>SV<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;channeling&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> buff <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">buff</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-c1">0</span>; n <span class="pl-k">&lt;</span> <span class="pl-smi">buff</span>.<span class="pl-c1">length</span>; n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> spellName <span class="pl-k">=</span> buff[n].<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onmouseover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>battle<span class="pl-c1">.</span>set_infopane_effect<span class="pl-cce">\(\&#39;</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\&#39;</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> buffLastTime <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(buff[n].<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onmouseover<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\&#39;\,</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\)</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(buffLastTime)) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (buffLastTime <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">channelReBuff</span>) {</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (spellName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Cloak of the Fallen<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>channelSkill_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>SL<span class="pl-pds">&#39;</span></span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;sparklife&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>422<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>422<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (spellName <span class="pl-k">in</span> name2Skill <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(skillLib[name2Skill[spellName]].<span class="pl-c1">id</span>)) {</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">gE</span>(skillLib[name2Skill[spellName]].<span class="pl-c1">id</span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> skillLib) {</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>channelSkill_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> skillLib[i].<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(skillLib[i].<span class="pl-c1">id</span>)) {</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(skillLib[i].<span class="pl-c1">id</span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> skillLib) {</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>buffSkill_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> skillLib[i].<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(skillLib[i].<span class="pl-c1">id</span>)) {</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">gE</span>(skillLib[i].<span class="pl-c1">id</span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;healthpot&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">hp0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkill_HD</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Draught&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Health Draught&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;manapot&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">mp0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkill_MD</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Draught&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Mana Draught&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;spiritpot&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">sp0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">buffSkill_SD</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Draught&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;Spirit Draught&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoUseInfusions</span>() { <span class="pl-c"><span class="pl-c">//</span>自动使用魔药</span></td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> infusionLib <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Flames<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fireinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Frost<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>coldinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>3<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Lightning<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>elecinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>4<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Storms<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>windinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>5<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Divinity<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>holyinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>6<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Infusion of Darkness<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>darkinfusion<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> infusionLib[<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>)].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.bte&gt;img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> infusionLib[[<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>)]].<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bti3&gt;div[onmouseover*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> infusionLib[<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>)].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">countMonsterHP</span>() { <span class="pl-c"><span class="pl-c">//</span>统计怪物血量</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> monsterHp <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm4&gt;div.btm5:nth-child(1)<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> monsterStatus <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">monsterHp</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img[src=&quot;/y/s/nbardead.png&quot;]<span class="pl-pds">&#39;</span></span>, monsterHp[i])) {</td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">      monsterStatus[i].<span class="pl-smi">isDead</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">      monsterStatus[i].<span class="pl-smi">hpNow</span> <span class="pl-k">=</span> <span class="pl-c1">Infinity</span>;</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">      monsterStatus[i].<span class="pl-smi">isDead</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">      monsterStatus[i].<span class="pl-smi">hpNow</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(monsterStatus[i].<span class="pl-smi">hp</span> <span class="pl-k">*</span> <span class="pl-c1">parseFloat</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.chbd&gt;img.chb2<span class="pl-pds">&#39;</span></span>, monsterHp[i]).<span class="pl-c1">style</span>.<span class="pl-c1">width</span>) <span class="pl-k">/</span> <span class="pl-c1">120</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">setValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">sort</span>(<span class="pl-en">objArrSort</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hpNow<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> hpLowest <span class="pl-k">=</span> monsterStatus[<span class="pl-c1">0</span>].<span class="pl-smi">hpNow</span>;</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">    monsterStatus[i].<span class="pl-smi">initWeight</span> <span class="pl-k">=</span> (monsterStatus[i].<span class="pl-smi">isDead</span>) <span class="pl-k">?</span> <span class="pl-c1">Infinity</span> <span class="pl-k">:</span> monsterStatus[i].<span class="pl-smi">hpNow</span> <span class="pl-k">/</span> hpLowest <span class="pl-k">*</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">    monsterStatus[i].<span class="pl-smi">finWeight</span> <span class="pl-k">=</span> monsterStatus[i].<span class="pl-smi">initWeight</span>;</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoUseDeSkill</span>() { <span class="pl-c"><span class="pl-c">//</span>自动施法De技能</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> skillLib <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Sle<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Sleep<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sleep<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Bl<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Blind<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>blind<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Slo<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Slow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Im<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Imperil<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>213<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>imperil<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>CM<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Coalesced Mana<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>coalescemana<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>MN<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>MagNet<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>233<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>magnet<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Si<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Silence<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>232<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>silence<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Dr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Drain<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>211<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>drainhp<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>We<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Weaken<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>212<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>weaken<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>Co<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Confuse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>223<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>confuse<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> monsterStatus <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">sort</span>(<span class="pl-en">objArrSort</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> monsterBuff <span class="pl-k">=</span> <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div.btm6<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">monsterBuff</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">in</span> skillLib) {</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">      monsterStatus[i].<span class="pl-smi">finWeight</span> <span class="pl-k">+=</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> skillLib[j].<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>, monsterBuff[i])) <span class="pl-k">?</span> <span class="pl-c1">parseFloat</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>weight_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> j])  <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>, monsterStatus);</td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">monsterStatus</span>.<span class="pl-c1">sort</span>(<span class="pl-en">objArrSort</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>finWeight<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> skillLib) {</td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>) [<span class="pl-s"><span class="pl-pds">&#39;</span>debuffSkill_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> i] <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(skillLib[i].<span class="pl-c1">id</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#mkey_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> monsterStatus[<span class="pl-c1">0</span>].<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;.btm6&gt;img[src*=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> skillLib[i].<span class="pl-smi">img</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(skillLib[i].<span class="pl-c1">id</span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#mkey_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> monsterStatus[<span class="pl-c1">0</span>].<span class="pl-c1">id</span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">autoAttack</span>() { <span class="pl-c"><span class="pl-c">//</span>自动打怪</span></td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">spiritStance</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">spiritStance_oc</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sp<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">parseInt</span>(<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">spiritStance_sp</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ckey_spirit[src*=&quot;spirit_a&quot;]<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ckey_spirit<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">sort</span>(<span class="pl-en">objArrSort</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>finWeight<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> minNum <span class="pl-k">=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>) [<span class="pl-c1">0</span>].<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">highSkill</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>3<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">middleSkill</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>attackStatus<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill</span>) {</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ckey_spirit[src*=&quot;spirit_a&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill_OFC</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillOC_OFC</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillMonster_OFC</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillBoss_OFC</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1111<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1111<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#ckey_spirit[src*=&quot;spirit_a&quot;]<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill_FUS</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillOC_FUS</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillMonster_FUS</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillBoss_FUS</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1101<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>1101<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill_3</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillOC_3</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillMonster_3</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillBoss_3</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>03<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>03<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill_2</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillOC_2</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillMonster_2</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillBoss_2</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>02<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>02<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skill_1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>oc<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillOC_1</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>monsterAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillMonster_1</span> <span class="pl-k">||</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bossAlive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">skillBoss_1</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">isOn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>01<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">fightingStyle</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>01<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (minNum <span class="pl-k">===</span> <span class="pl-c1">10</span>) minNum <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#mkey_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> minNum).<span class="pl-c1">click</span>();</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>end<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">gE</span>(<span class="pl-smi">ele</span>, <span class="pl-smi">mode</span>, <span class="pl-smi">parent</span>) { <span class="pl-c"><span class="pl-c">//</span>获取元素</span></td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> ele <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> ele;</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (mode <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> parent <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (<span class="pl-c1">isNaN</span>(<span class="pl-c1">parseInt</span>(ele))) <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(ele)  <span class="pl-k">:</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(ele);</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (mode <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (parent <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">querySelectorAll</span>(ele)  <span class="pl-k">:</span> <span class="pl-smi">parent</span>.<span class="pl-c1">querySelectorAll</span>(ele);</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> mode <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> parent <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">mode</span>.<span class="pl-c1">querySelector</span>(ele);</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">cE</span>(<span class="pl-smi">name</span>) { <span class="pl-c"><span class="pl-c">//</span>创建元素</span></td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(name);</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">isOn</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">gE</span>(id) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">gE</span>(id).<span class="pl-c1">style</span>.<span class="pl-smi">opacity</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0.5<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">setValue</span>(<span class="pl-smi">item</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">  localStorage[<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> item] <span class="pl-k">=</span> (<span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> value <span class="pl-k">:</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(value);</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">getValue</span>(<span class="pl-smi">item</span>, <span class="pl-smi">toJSON</span>) {</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> (localStorage[<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> item]) <span class="pl-k">?</span> ((toJSON) <span class="pl-k">?</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(localStorage[<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> item])  <span class="pl-k">:</span> localStorage[<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> item])  <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">delValue</span>(<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> item <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> item);</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> item <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (item <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>roundNow<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>roundAll<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>monsterStatus<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (item <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hvAA-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>roundType<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">reload</span>() {</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">  location <span class="pl-k">=</span> <span class="pl-smi">location</span>.<span class="pl-smi">search</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>#<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">g</span>(<span class="pl-smi">item</span>, <span class="pl-smi">key</span>) { <span class="pl-c"><span class="pl-c">//</span>全局变量</span></td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">window</span>.<span class="pl-smi">hvAA</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">hvAA</span> <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">window</span>.<span class="pl-smi">hvAA</span>[item];</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">hvAA</span>[item] <span class="pl-k">=</span> key;</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">post</span>(<span class="pl-smi">href</span>, <span class="pl-smi">parm</span>, <span class="pl-smi">func</span>) { <span class="pl-c"><span class="pl-c">//</span>post</span></td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>, href);</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">xhr</span>.<span class="pl-c1">setRequestHeader</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Content-Type<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>application/x-www-form-urlencoded; charset=UTF-8<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">xhr</span>.<span class="pl-smi">responseType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>document<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">status</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">200</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">status</span> <span class="pl-k">&lt;</span> <span class="pl-c1">400</span>) <span class="pl-en">func</span>(e);</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">    xhr <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>(parm);</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">objArrSort</span>(<span class="pl-smi">propertyName</span>) { <span class="pl-c"><span class="pl-c">//</span>对象数组排序函数，从小到大排序，来自http://www.jb51.net/article/24536.htm</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-smi">object1</span>, <span class="pl-smi">object2</span>) {</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value1 <span class="pl-k">=</span> object1[propertyName];</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value2 <span class="pl-k">=</span> object2[propertyName];</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (value2 <span class="pl-k">&lt;</span> value1) {</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (value2 <span class="pl-k">&gt;</span> value1) {</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">objSort</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> arr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">arr</span>.<span class="pl-c1">push</span>(i);</td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">arr</span>.<span class="pl-c1">sort</span>();</td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> objNew <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">arr</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">    objNew[arr[i]] <span class="pl-k">=</span> obj[arr[i]];</td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> objNew;</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">setNotice</span>(<span class="pl-smi">title</span>, <span class="pl-smi">text</span>, <span class="pl-smi">time</span>) { <span class="pl-c"><span class="pl-c">//</span>桌面通知</span></td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">Notification</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">Notification</span>.<span class="pl-smi">permission</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>denied<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Notification</span>.<span class="pl-en">requestPermission</span>(<span class="pl-k">function</span> (<span class="pl-smi">status</span>) {</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">g</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">notification</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (status <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>granted<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Notification</span>(title, {</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">          body<span class="pl-k">:</span> text</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">n</span>.<span class="pl-en">onclick</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAAlert<span class="pl-pds">&#39;</span></span>)) <span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAAlert<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(<span class="pl-en">gE</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#hvAAAlert<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">n</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">n</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">1000</span> <span class="pl-k">*</span> time);</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.12382s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-qGcOKOeLPwGU3+T/SVUz+lI+fnAAbb9axOapfoqVer0=" src="https://assets-cdn.github.com/assets/frameworks-a8670e28e78b3f0194dfe4ff495533fa523e7e70006dbf5ac4e6a97e8a957abd.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-i28Sf4dlo1o0664ifALHi3SQSHK/WAdbTtwTTU6ywhg=" src="https://assets-cdn.github.com/assets/github-8b6f127f8765a35a34ebae227c02c78b74904872bf58075b4edc134d4eb2c218.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

