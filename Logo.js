function solve() {
    return function() {
        var template = `
        <ul class="nav">
              {{#if logo}}
        <li class="nav-item logo">
        <a href="{{logo.url}}">
        <img src="{{logo.image}}">
        </a>
        </li>
              {{/if}}
              {{#if items}}
              {{#each items}}
        <li class="nav-item">
        <a href="{{url}}">{{title}}</a>
              {{#if items}}
        <ul class="subnav">
              {{#each items}}
        <li class="nav-item">
        <a href="{{url}}">{{title}}</a>
        </li>
              {{/each}}
        </ul>
              {{/if}}
        </li>
              {{/each}}
              {{/if}}
        </ul>
        `;
        return template;
    };
}

module.exports = solve;
