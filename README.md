# storybook-auto-events
Annoyed to always add all events to your story so that they appear in the `Actions` panel?
This is where `storybook-auto-events` comes in handy. It will automatically detect all events
thrown in your component and create an event listener for exactly that event.

## Install
    
    npm i storybook-auto-events

## Setup
in your `.storybook/preview.js` add a new `decorator`

    // File: .storybook/preview.js

    import withEvents from 'storybook-auto-events';

    export const decorators = [
        withEvents,
        storybookAxiosDecorator(getAxios()),
    ];

## Usage
Add a new parameter in your story named `events`. `Events` is an object which holds a list of handlers with the corresponding
event name as the key.
Add those events to the story context via `data` or a `computed` property and finally bind all events to your component
via `v-on="events"`

    //select-input.stories.js

    export const IncludeExclude = (args, { argTypes, events }) => ({
        components: { SelectInput },
        props: Object.keys(argTypes),
        data: () => ({
            events,
        }),
        template: `
            <select-input v-bind="$props" v-on="events"/>`,
    });
