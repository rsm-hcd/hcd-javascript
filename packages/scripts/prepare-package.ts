import * as fs from 'fs';

interface PackageJson {
    name: string;
    version: string;
    description: string;
    main: string;
    types: string;
    files: string[];
    keywords: string[];
    publishConfig?: Record<string, unknown>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    optionalDependencies?: Record<string, string>;
}

function main(input: string, output: string, excludePackages: string): void {
    const packageJson = readPackageJson(input);
    const processedPackageJson = processPackageJson(packageJson, excludePackages.split(','));
    writePackageJson(output, processedPackageJson);
}

function readPackageJson(input: string): PackageJson {
    return JSON.parse(fs.readFileSync(input, 'utf-8'));
}

function writePackageJson(output: string, packageJson: PackageJson): void {
    fs.writeFileSync(output, JSON.stringify(packageJson, null, 2));
}

function processPackageJson(packageJson: PackageJson, excludePackages: string[]): PackageJson {
    const { publishConfig, ...base } = packageJson;
    const removeDependencies = (dependencies?: Record<string, string>) => removeInternalWorkspaceDependencies(dependencies, excludePackages);

    return {
        ...base,
        dependencies: removeDependencies(base.dependencies),
        devDependencies: removeDependencies(base.devDependencies),
        peerDependencies: removeDependencies(base.peerDependencies),
        optionalDependencies: removeDependencies(base.optionalDependencies),
    };
}

function removeInternalWorkspaceDependencies(dependencies?: Record<string, string>, excludePackages: string[] = []): Record<string, string> | undefined {
    if (!dependencies) {
        return undefined;
    }

    return Object.keys(dependencies)
        .reduce((acc, key) => {
            if (!excludePackages.includes(key)) {
                return {
                    ...acc,
                    [key]: dependencies[key],
                };
            }
            return acc;
        }, {});
}

main(process.argv[2], process.argv[3], process.argv[4]);
