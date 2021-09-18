import { createAnimation } from '@ionic/angular';
import { Animation } from '@ionic/core';

export const enterAnimation = (baseEl: HTMLElement): Animation => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.0, 0.0)
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  wrapperAnimation
    .addElement(baseEl.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, opacity: 0.2, transform: 'translateX(100%)' },
      { offset: 1, opacity: 1, transform: 'translateX(0px)' }
    ]);

  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(1000)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

export const leaveAnimation = (baseEl: HTMLElement): Animation => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const wrapperEl = baseEl.querySelector('.modal-wrapper')!;

  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.0, 0.0);

  wrapperAnimation
    .addElement(wrapperEl)
    .keyframes([
      { offset: 0, opacity: 1, transform: 'translateX(0px)' },
      { offset: 1, opacity: 0.2, transform: 'translateX(100%)' }
    ]);

  return baseAnimation
    .addElement(baseEl)
    .easing('ease-out')
    .duration(700)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};