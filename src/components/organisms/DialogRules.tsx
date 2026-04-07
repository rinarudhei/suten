import { Dialog } from 'radix-ui';
import Button from '../atoms/Button';
import './DialogRules.scss';
import X from '../../assets/icon-close.svg';
import Rules from '../../assets/image-rules.svg';

function DialogRules() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant='ghost'>RULES</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='dialog-overlay' />
        <Dialog.Content className='dialog-content'>
          <div className='dialog-content__inner'>
            {/* Header */}
            <div className='dialog-header'>
              <Dialog.Title className='dialog-title'>RULES</Dialog.Title>

              <Dialog.Close className='close-button' asChild>
                <img className='close-button__img' src={X} alt='Close button' />
              </Dialog.Close>
            </div>

            {/* Game Rules Description */}
            <Dialog.Description className='dialog-description'>
              <img className='game-rules' src={Rules} alt='Game Rules' />
            </Dialog.Description>

            {/* Footer */}
            <Dialog.Close className='footer' asChild>
              <img className='footer__img' src={X} alt='Close button' />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogRules;
