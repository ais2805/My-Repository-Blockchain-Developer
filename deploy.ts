import { Library } from '../typechain';
import { ethers } from 'hardhat';

async function main() {
  // contract instance
  const Perpustakaan = await ethers;<Library>('Library');
}

main().catch((err) => {
  console.log('error =', err);
  process.exitCode = 1;
});
