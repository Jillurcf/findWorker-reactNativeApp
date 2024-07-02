import React from 'react';
import { Modal, Button, HStack, Text } from 'native-base';

const SettingsModal = ({ isVisible, onClose }) => {
  return (
    <Modal isOpen={isVisible} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Delete Confirmation</Modal.Header>
        <Modal.Body>
          <Text>Are you sure you want to delete this item?</Text>
        </Modal.Body>
        <Modal.Footer>
          <HStack space={2}>
            <Button variant="ghost" onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={() => {
              // Handle the delete action here
              onClose();
            }}>
              Delete
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SettingsModal;
