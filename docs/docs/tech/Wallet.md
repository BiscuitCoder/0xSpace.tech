---
title: 钱包-真正的控制权
date: 2021-10-20 23:30:52
---
## 真正掌控你的资产

传统的资产实际由中心化机构控，例如：银行账户中的资金由银行托管，用户需依赖密码或身份验证访问，但银行可冻结账户或限制交易（如涉嫌违规时），用户完全掌握私钥，独立控制资产。而使用
web3钱包，私钥仅存储在本地设备，即使钱包服务商停止运营，用户仍可通过助记词恢复资产。


而其弊端在于，用户对自己的助记词或者私钥负责，它无法被赋予身份ID，掌握私钥或者助记词即掌握了所有资产。当然这样的管理成本与理解成本，也不可避免的成为了前期大部分用户无法积极参与的原因之一。

随着社区基建的不断完善，钱包也在不断进化，如硬件钱包、AA钱包、MPC钱包、多签钱包、托管钱包（后续会讲到这种钱包）等都在不断做着降低用户门槛的努力，且效果显著。

事实上我们通过密码学，真正赋予了每个人掌握自己资产的能力，而非依赖某个中心化的机构（即使他们看起来是那么可靠光鲜）。而这一切的发生不仅仅需要技术的发展，更多的是共识。我们创造了一个普遍的共识，共同认可了一个事物的价值，这是一个很了不起的事情！

## HD钱包的实现原理
HD 钱包（Hierarchical Deterministic Wallets）是在 BIP32 中提出的为了避免管理一堆私钥的麻烦提出的分层推导方案。

BIP44 是给 BIP32 的分层增强了路径定义规范，同时增加了对多币种的支持。

BIP39 则通过定义助记词让种子的备份更友好。

通常钱包的生成流程为：
- ​种子生成：通过128/256位熵源+BIP-39词库生成助记词（如24个英文单词）
- ​主密钥派生：PBKDF2-HMAC-SHA512算法将助记词扩展为512位种子
- ​分层派生路径：按m/purpose'/coin_type'/account'/change/address_index结构生成子密钥
- 典型路径：比特币为m/44'/0'/0'/0/0，以太坊为m/44'/60'/0'/0/0
- ​地址生成：采用非压缩公钥→Keccak256哈希→取后20字节生成ETH地址

通常助记词与生成的私钥会使用如AES之类的加密算法加密处理后，存在钱包APP或者插件本地，当用户需要发起交易时，通过输入密码获取私钥完成签名后，push交易到指定的节点，完成交易。

详细技术原理可查看：[HDWallet 原理分析](https://learnblockchain.cn/article/784)

## 钱包与Dapp交互
现在我们已经有了自己的钱包，但他本质上只是一个私钥加密存储器，我们需要接入生态dapp，这需要钱包能够拦截到dapp中发起的交易签名请求，然后通过用户输入密码的方式解出私钥，完成签名构建，发起交易。

这个时候就需要一套普适性的通信协议：

- ​EIP-1193：标准化Provider接口，实现eth_requestAccounts账户请求、eth_sendTransaction交易签名等基础功能 [EIP-1193官方文档](https://eips.ethereum.org/EIPS/eip-1193) 
- EIP-6963：解决多钱包冲突问题，通过window.ethereum.providers数组暴露所有可用钱包（这个通常是针对浏览器安装了多个插件钱包的情况） [EIP-6963官方文档](https://eips.ethereum.org/EIPS/eip-6963)
- WalletConnect：端到端加密的远程协议，支持二维码扫描、深层链接(Deep Link)和推送通知 [Walletconnect](https://reown.com/appkit)


```js
// DApp连接代码示例
if (typeof window.ethereum !== 'undefined') {
    const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
    });
    const provider = new ethers.BrowserProvider(window.ethereum);
} else {
    const connector = new WalletConnect({
        projectId: 'YOUR_PROJECT_ID',
        chains: ['eip155:1']
    });
    await connector.connect();
}
```

同时 Metamask 的官方开源demo也有很好的参考价值 [点击查看](https://metamask.github.io/test-dapp/)


## 账户抽象(AA钱包)

便携中...

## MPC钱包

便携中...

## 硬件钱包

便携中...

## 主流钱包

便携中...


