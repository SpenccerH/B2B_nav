import {Button, Dialog, Modal, ModalOverlay} from 'react-aria-components';
import {ReactNode} from 'react';
import './my-dialog-form.css';

interface DialogProps extends AriaDialogProps {
    children: ReactNode
}

function MyRequestForm({children, ...props} : DialogProps) {
    return (
        <ModalOverlay className="fixed inset-0 bg-black/50 z-50">
            <Modal>
                <Dialog {...props} className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm overflow-hidden shadow-sm">
                    {({ close }) => (
                        <form className="grid grid-cols-2 pl-8 pr-8 gap-y-3 gap-x-4 pb-8 bg-lavender/10">
                            {children}
                            <div className="col-span-2 flex justify-between pt-6">
                                <Button className="my-dialog-form-Button--cancel" onPress={close}>
                                    Cancel
                                </Button>
                                <Button className="my-dialog-form-Button" onPress={close}>
                                    Request
                                </Button>
                            </div>
                        </form>
                    )}
                </Dialog>
            </Modal>
        </ModalOverlay>
    )
}

export default MyRequestForm;