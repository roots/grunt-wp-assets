# {%= name %} {% if (travis) { %} [![Build Status]({%= travis %}.png?branch=master)]({%= travis %}){% } %}

> {%= description %}

{%= docs("overview.md") %}
{%= docs("getting-started.md") %}
{%= docs("version-examples.md") %}
{%= docs("version-options.md") %}

## Release History
{%= changelog() %}

## Author

+ [{%= author.name %}]({%= author.url %})

## License
{%= copyright() %}
{%= license() %}
