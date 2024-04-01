export function useFormSubmissionHandler(
    cb: (fields: Record<string, string>) => void
): React.FormEventHandler<HTMLFormElement> {
    return (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        const formData = new FormData(evt.currentTarget);
        const fields = Object.fromEntries(formData) as Record<string, string>;

        cb(fields);
    };
}
