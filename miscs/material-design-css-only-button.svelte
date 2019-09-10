<style type="text/scss">
  @import url(https://fonts.googleapis.com/css?family=Roboto);

  $md-btn-color: #2196f3;

  .md-btn {
    font-family: 'Roboto medium', sans-serif;
    font-size: 14px;
    display: inline-block;
    height: 36px;
    min-width: 88px;
    padding: 6px 16px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    border-radius: 2px;
    background: $md-btn-color;
    color: #fff;
    outline: 0;
    &:focus {
      background: darken($md-btn-color, 12%);
    }
  }

  .md-btn-raised {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

    &:active {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
    }
  }

  /*
   Ripple
  */
  .md-btn-ripple {
    overflow: hidden;
    position: relative;
  }

  .md-btn-ripple:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: 120px;
    margin-left: -60px;
    margin-top: -60px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    transform: scale(0);
  }

  @keyframes md-btn-ripple {
    0% {
      transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  .md-btn-ripple:not(:active):after {
    animation: md-btn-ripple 0.6s ease-out;
  }

  .md-btn-ripple:after {
    visibility: hidden;
  }

  .md-btn-ripple:focus:after {
    visibility: visible;
  }

  // *************************************

  // *************************************
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background: #f0f0f0;
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
  }

  section {
    background: white;
    padding: 1em;
    margin: 0 auto;
    height: 300px;
    max-width: 800px;
    text-align: center;
    h1 {
      margin: 2em;
    }
  }
</style>

<section>
  <h1>Simple material design CSS only buttons example</h1>
  <button type="button" class="md-btn">BUTTON</button>
  <button type="button" class="md-btn md-btn-raised">RAISED</button>
  <button type="button" class="md-btn md-btn-raised md-btn-ripple">
    RIPPLE
  </button>
</section>
