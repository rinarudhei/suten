import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import Button from '../atoms/Button';
import './DialogRules.scss';
import X from '../../assets/icon-close.svg';
import Rules from '../../assets/image-rules.svg';

function DialogRules() {
  return (
    <Dialog>
      <DialogTrigger asChild className='dialog-trigger'>
        <Button variant='ghost'>RULES</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className='dialog-overlay' />
        <DialogContent className='dialog-content' id='rules-dialog'>
          <div className='dialog-content__inner'>
            {/* Header */}
            <div className='dialog-header'>
              <DialogTitle className='dialog-title'>RULES</DialogTitle>

              <DialogClose className='close-button' asChild>
                <img className='close-button__img' src={X} alt='Close button' />
              </DialogClose>
            </div>

            {/* Game Rules Description */}
            <DialogDescription className='dialog-description'>
              <img className='game-rules' src={Rules} alt='Game Rules' />
            </DialogDescription>

            {/* Footer */}
            <DialogClose className='footer' asChild>
              <img className='footer__img' src={X} alt='Close button' />
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default DialogRules;
