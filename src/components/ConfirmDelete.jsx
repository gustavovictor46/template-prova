'use-client';

import { Button, Modal } from 'antd';

export default function ConfirmDelete({ openModal, serie, confirmLoading, onConfirm, onCancel }) {

    return(
      <Modal>
        open={openModal}
        title="Confirmar exclusão"
        centered
        onCancel={onCancel}
        footer={null}
        destroyOnHidden

         <P>Tem certeza que deseja excluir a série "{serie.title}"?</P>
         <Button danger type="primary" loading={confirmLoading} onClick={onConfirm}>
            Excluir
         </Button>
      </Modal>
    );
}