/**
 * TypeScript Demo - Gruvbox Crisp Theme
 * Demonstrates TypeScript-specific syntax highlighting
 */

// Type imports and exports
import type { Request, Response, NextFunction } from 'express';
export type { UserRole, Permission } from './types';

// Basic types and interfaces
type ID = string | number;
type Status = 'pending' | 'active' | 'completed' | 'failed';

interface User {
    id: ID;
    name: string;
    email: string;
    age?: number;
    readonly createdAt: Date;
}

interface Admin extends User {
    role: 'admin';
    permissions: string[];
}

// Generic interfaces and types
interface Repository<T> {
    findById(id: ID): Promise<T | null>;
    findAll(filter?: Partial<T>): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: ID): Promise<boolean>;
}

type AsyncFunction<T = void> = (...args: any[]) => Promise<T>;
type Nullable<T> = T | null | undefined;

// Enums
enum LogLevel {
    Debug = 'DEBUG',
    Info = 'INFO',
    Warning = 'WARNING',
    Error = 'ERROR'
}

const enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// Classes with TypeScript features
abstract class BaseEntity {
    abstract id: ID;
    
    protected constructor(
        public readonly createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ) {}
    
    abstract validate(): boolean;
}

class UserEntity extends BaseEntity implements User {
    private _email: string;
    
    constructor(
        public id: ID,
        public name: string,
        email: string,
        public age?: number
    ) {
        super();
        this._email = email;
    }
    
    get email(): string {
        return this._email;
    }
    
    set email(value: string) {
        if (this.validateEmail(value)) {
            this._email = value;
            this.updatedAt = new Date();
        }
    }
    
    private validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    validate(): boolean {
        return !!(this.id && this.name && this.validateEmail(this._email));
    }
}

// Decorators
function Logger(prefix: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                console.log(`${prefix}: Creating instance of ${constructor.name}`);
            }
        };
    };
}

function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = async function(...args: any[]) {
        console.log(`Validating inputs for ${propertyKey}`);
        const result = await originalMethod.apply(this, args);
        console.log(`Validation complete for ${propertyKey}`);
        return result;
    };
}

// Generic classes and functions
@Logger('UserService')
class UserService<T extends User> implements Repository<T> {
    private users: Map<ID, T> = new Map();
    
    @Validate
    async findById(id: ID): Promise<T | null> {
        return this.users.get(id) || null;
    }
    
    async findAll(filter?: Partial<T>): Promise<T[]> {
        let results = Array.from(this.users.values());
        
        if (filter) {
            results = results.filter(user => 
                Object.entries(filter).every(([key, value]) => 
                    user[key as keyof T] === value
                )
            );
        }
        
        return results;
    }
    
    async save(entity: T): Promise<T> {
        this.users.set(entity.id, entity);
        return entity;
    }
    
    async delete(id: ID): Promise<boolean> {
        return this.users.delete(id);
    }
}

// Advanced type manipulation
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type DeepReadonly<T> = T extends object ? {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
} : T;

// Conditional types
type IsArray<T> = T extends any[] ? true : false;
type ElementType<T> = T extends (infer E)[] ? E : never;

// Template literal types
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RoutePattern = `/${string}`;
type APIRoute = `${HTTPMethod} ${RoutePattern}`;

// Mapped types with template literals
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// Utility types usage
type UserUpdate = Partial<Omit<User, 'id' | 'createdAt'>>;
type UserCreate = Omit<User, 'id' | 'createdAt'>;
type UserResponse = Readonly<Required<User>>;

// Function overloading
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 2;
    }
    return !value;
}

// Type guards
function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user && user.role === 'admin';
}

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

// Assertion functions
function assertDefined<T>(value: T | null | undefined, name: string): asserts value is T {
    if (value === null || value === undefined) {
        throw new Error(`${name} is not defined`);
    }
}

// Namespace
namespace Utils {
    export function generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
    
    export interface Config {
        debug: boolean;
        timeout: number;
    }
}

// Module augmentation
declare module 'express' {
    interface Request {
        user?: User;
        session?: {
            id: string;
            data: Record<string, any>;
        };
    }
}

// Type-safe event emitter
type EventMap = {
    'user:created': User;
    'user:updated': { id: ID; changes: Partial<User> };
    'user:deleted': ID;
};

class TypedEventEmitter<T extends Record<string, any>> {
    private listeners: Partial<{
        [K in keyof T]: Array<(data: T[K]) => void>;
    }> = {};
    
    on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(listener);
    }
    
    emit<K extends keyof T>(event: K, data: T[K]): void {
        this.listeners[event]?.forEach(listener => listener(data));
    }
}

// Const assertions and literal types
const config = {
    api: {
        version: 'v1',
        endpoints: {
            users: '/api/v1/users',
            posts: '/api/v1/posts'
        }
    }
} as const;

type APIVersion = typeof config.api.version;
type Endpoint = typeof config.api.endpoints[keyof typeof config.api.endpoints];

// Intersection types
type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type Identifiable = {
    id: ID;
};

type Entity = Timestamped & Identifiable;

// Export statements
export { UserService, UserEntity, TypedEventEmitter };
export type { Repository, EventMap };