import { RoleGuard } from './role.guard';

describe('RoleFlatGuard', () => {
  it('should be defined', () => {
    expect(new RoleGuard()).toBeDefined();
  });
});
