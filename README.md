# ember-float-label [![Build Status](https://travis-ci.org/jasonkriss/ember-float-label.svg?branch=master)](https://travis-ci.org/jasonkriss/ember-float-label)

Animated float labels for your Ember app.

## Installation

```bash
# From within your ember-cli project
ember install:addon ember-float-label
```

## Usage

In your template:

```hbs
{{#float-label}}
  {{input type='text' value=name placeholder='Name'}}
{{/float-label}}

{{#float-label}}
  {{textarea value=notes placeholder='Notes'}}
{{/float-label}}

{{#float-label}}
  {{view 'select'
         prompt='State'
         content=stateOptions
         optionValuePath='content.abbreviation'
         optionLabelPath='content.name'
         value=state}}
{{/float-label}}
```

Note that `input` and `textarea` must have a `placeholder` while `select` must have a `prompt`. If you want the float label to be something different than the placeholder/prompt, you can specify it as follows:

```hbs
{{#float-label label='Something Else'}}
  {{input type='text' value=name placeholder='Name'}}
{{/float-label}}
```

Styling is left completely up to you.
