import {Button, Dialog, Modal, ModalOverlay} from 'react-aria-components';
import {ReactNode} from 'react';
import './my-dialog-form.css';

interface DialogProps extends AriaDialogProps {
    children: ReactNode
}

function MyConfirmForm({children, ...props} : DialogProps) {
    return (
        <ModalOverlay className="fixed inset-0 bg-black/50 z-50">
            <Modal>
                <Dialog {...props} className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm overflow-hidden shadow-sm w-116">
                    {({ close }) => (
                        <form className="gap-y-3 gap-x-4 pb-8 bg-lavender/10">
                            {children}
                            <div className="col-span-2 flex flex-row gap-x-10 justify-center">
                                <Button className="text-white bg-gray-600 rounded hover:bg-gray-700 w-32 h-10" onPress={close}>
                                    Cancel
                                </Button>
                                <Button className="text-white bg-red-600 rounded hover:bg-red-700 w-32 h-10" onPress={close}>
                                    Remove
                                </Button>
                            </div>
                        </form>
                    )}
                </Dialog>
            </Modal>
        </ModalOverlay>
    )
}

export default MyConfirmForm;