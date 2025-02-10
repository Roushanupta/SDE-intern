import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const result = { id: 1, username: 'test', email: 'test@example.com', password: 'test123' };
    jest.spyOn(service, 'createUser').mockResolvedValue(result);

    expect(await controller.create({ username: 'test', password: 'test123', email: 'test@example.com' }))
      .toEqual(result);
  });
});
