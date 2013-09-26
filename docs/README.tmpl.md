# {%= name %} v{%= version %}{% if (travis) { %} [![Build Status]({%= travis %}.png?branch=master)]({%= travis %}){% } %}

> {%= description %}

{%= _.doc("overview.md") %}
{%= _.doc("getting-started.md") %}
{%= _.doc("wprev-*.md") %}

{% if (changelog) { %}
## Release History
{%= _.include("docs-changelog.md") %} {% } %}

## Author

+ [{%= author.name %}]({%= author.url %})

## License
{%= _.include("docs-license.md") %}

***

_This file was generated on {%= grunt.template.today() %}._
