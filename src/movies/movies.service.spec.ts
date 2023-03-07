import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Testing function getAll', () => {
    it('Should be return array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('Testing function getOne', () => {
    it('Should be return movie', () => {
      service.create({
        title: 'Test movie',
        genres: ['Test genres'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });

    it('Should be returned error NotFoundException', () => {
      try {
        service.getOne(9999);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });

    describe('Testing function remove', () => {
      it('Should be remove movie', () => {
        service.create({
          title: 'Test movie',
          genres: ['Test genres'],
          year: 2000,
        });
        const allMovies = service.getAll().length;
        service.remove(1);
        const afterRemove = service.getAll().length;
        expect(afterRemove).toBeLessThan(allMovies);
      });

      it('Should be returned error NotFoundException', () => {
        try {
          service.remove(9999);
        } catch (err) {
          expect(err).toBeInstanceOf(NotFoundException);
        }
      });
    });

    describe('Testing function create', () => {
      it('Should be create movie', () => {
        const beforeCreate = service.getAll().length;
        service.create({
          title: 'Test movie',
          genres: ['Test genres'],
          year: 2000,
        });
        const afterCreate = service.getAll().length;
        expect(afterCreate).toBeGreaterThan(beforeCreate);
      });
    });

    describe('Testing function patch', () => {
      it('Should be changed movie', () => {
        service.create({
          title: 'Test movie',
          genres: ['Test genres'],
          year: 2000,
        });
        service.patch(1, { title: 'Updated test' });
        const movie = service.getOne(1);
        expect(movie.title).toEqual('Updated test');
      });

      it('Should be returned error NotFoundException', () => {
        try {
          service.patch(9999, { title: '' });
        } catch (err) {
          expect(err).toBeInstanceOf(NotFoundException);
        }
      });
    });
  });
});
