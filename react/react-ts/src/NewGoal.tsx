import { type FormEvent } from 'react';
export default function NewGoal() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const text = formData.get('text') as string;
        const description = formData.get('description') as string;
        console.log('New Goal:', { text, description });
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <p>
                <div>
                    <label htmlFor="text">Goal Text:</label>
                    <input type="text" id="text" name="text" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                </div>
                <button type="submit">Add Goal</button>
               </p>           
            </form>
    );
}
