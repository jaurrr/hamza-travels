import { Pipe, PipeTransform } from '@angular/core';

import { TranslationService } from './translation.service';

/**
 * Usage:
 *   {{ 'nav.home' | translate }}
 *   {{ 'nav.home' | translate:'Home' }}            (explicit fallback)
 *   {{ ('svc.' + service.id + '.name') | translate:service.name }}
 *
 * Impure on purpose: re-evaluates automatically when the language
 * signal changes, without manual change-detection wiring.
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private i18n: TranslationService) {}

  transform(key: string, fallback = ''): string {
    if (!key) {
      return fallback;
    }
    return this.i18n.translate(key, fallback);
  }
}
