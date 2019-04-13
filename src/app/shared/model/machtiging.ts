export class Machtiging {
  titel: string;
  instelling: string;
  reden: string;
  periode: Periode;
  valid: boolean;
  gemachtigde: string;
}

export class Periode {
  van: string;
  tot: string;
}
