type Invitation = {
  member: number;
  guests: number[];
};

class CocoBongoParty {
  private people: number[];
  private invitations: Invitation[];

  constructor(people: number[], invitations: Invitation[]) {
    this.people = people;
    this.invitations = invitations;
  }

  findGatecrashers(): number[] {
    const crashers = new Set(this.people);

    for (const invite of this.invitations) {
      if (!invite || invite.member === undefined || !Array.isArray(invite.guests)) continue;

      crashers.delete(invite.member);

      for (const guest of invite.guests) {
        crashers.delete(guest);
      }
    }

    return Array.from(crashers).sort((a, b) => a - b);
  }
}

// Teste simples
const partyMembers = [0, 1, 2, 3, 4];
const invitations: Invitation[] = [
  { member: 0, guests: [1, 2] },
  { member: 2, guests: [3] }
];

const party = new CocoBongoParty(partyMembers, invitations);
const gatecrashers = party.findGatecrashers();

console.log(gatecrashers);  // Deve imprimir: [4]
