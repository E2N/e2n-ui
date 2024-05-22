import { ModalDialog } from './ModalDialog';
import { Button } from '../Button';
import { theme } from '../../theme/default';
import { useState } from 'react';

export default {
  title: 'Layout/ModalDialog',
  component: ModalDialog,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      {isOpen && (
        <ModalDialog
          size="small"
          title="E-Mail-Adresse löschen"
          onClose={() => setIsOpen(false)}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.md,
            }}
          >
            <div>
              Bist Du Dir sicher, dass Du die E-Mail-Adresse{' '}
              <strong>foo@example.com</strong> von der Blacklist löschen
              möchtest?
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                gap: theme.spacing.md,
              }}
            >
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Abbrechen
              </Button>
              <Button>Löschen</Button>
            </div>
          </div>
        </ModalDialog>
      )}
    </>
  );
};
