import { Button } from '../../../components';
import ImageSlider from '../../../components/slider';

export const Section1 = () => {
  return (
    <>
      <div className={'flex justify-center'}>
        <h3>Nuestra Invitación</h3>
      </div>
      <ImageSlider />
      <div className="flex justify-center mt-2">
        <a href="/public/invitation.pdf" download="my-invitation.pdf">
          <Button>Imprimir</Button>
        </a>
      </div>
    </>
  );
};
