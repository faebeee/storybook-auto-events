import { action } from '@storybook/addon-actions';
import { makeDecorator } from '@storybook/addons';

export const withEvents = makeDecorator({
    name: 'withEvents',
    wrapper: (storyFn, context, { parameters }) => {
        const events = Object.values(context.argTypes).reduce((acc, argType) => {
            if (argType.table && argType.table.category === "events") {
                acc.push(argType.name);
            }
            return acc;
        }, []);

        const listeners = events.reduce((acc, event) => {
            acc[event] = action(event);
            return acc;
        }, {})
        return storyFn({ ...context, events: listeners });
    },
});

export default withEvents;
