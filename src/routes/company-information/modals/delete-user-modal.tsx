import MyConfirmForm from '../../../components/form/my-confirm-form.tsx';

function DeleteUserModal({text, item}:{text:String, item:String}) {
    return (
        <MyConfirmForm>
            <div className="flex flex-col p-8 text-center">
                <div className="text-xl font-medium pb-2.5">Remove {text}?</div>
                <div className="inline text-secondary-color">
                    Are you sure you want to remove "<span className="font-medium text-secondary-color">{item}</span>"?
                </div>
                <div className="text-secondary-color">You can't undo this action.</div>
            </div>
        </MyConfirmForm>
    )
}

export default DeleteUserModal;