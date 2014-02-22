# {%= name %} {% if (travis) { %} [![Build Status]({%= travis %}.png?branch=master)]({%= travis %}){% } %}

> {%= description %}

{%= _.doc("overview.md") %}
{%= _.doc("getting-started.md") %}
{%= _.doc("version-*.md") %}

## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    var date = details.date;
    if (date instanceof Date) {
      date = grunt.template.date(new Date(date.getTime() + date.getTimezoneOffset() * 60000), 'yyyy-mm-dd');
    }
    print('\n * ' + [
      date,
      version,
      details.changes.join(' '),
    ].join('\u2003\u2003\u2003'));
  });
} else { %}
_(Nothing yet)_
{% } %}

## Author

+ [{%= author.name %}]({%= author.url %})

## License
{%= copyright %}
{%= license %}
