/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
interface Properties {
    type: string;
    title: string;
    disabled: boolean;
}
declare const MyButton_base: typeof import("lit").LitElement;
export declare class MyButton extends MyButton_base implements Properties {
    type: string;
    title: string;
    /**
     * The number of times the button has been clicked.
     */
    disabled: boolean;
    render(): import("lit").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
export {};
