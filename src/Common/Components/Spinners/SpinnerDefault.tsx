import * as React from 'react';
import { Spinner } from 'baseui/spinner';
import { useStyletron } from "baseui";

export default function SpinnerDefault() {
    const [css] = useStyletron();

    return (
        <div className={css({
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        })}>
            <Spinner
                overrides={{
                    Svg: {
                        props: {
                            'data-label': 'data-label',
                        },
                        style: ({ $theme }) => ({
                            borderTopLeftRadius: '50%',
                            borderTopRightRadius: '50%',
                            borderBottomRightRadius: '50%',
                            borderBottomLeftRadius: '50%',
                            backgroundColor: $theme.colors.primary50,
                        }),
                    },
                }}
            />
        </div>
    );
}
