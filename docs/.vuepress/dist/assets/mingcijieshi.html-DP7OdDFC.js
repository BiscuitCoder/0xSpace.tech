import{_ as s,c as r,b as i,a,d as l,e as h,o as d,r as t}from"./app-BkOrmesi.js";const p={},c={href:"https://bitcoin-on-nodejs.ebookchain.org/5-%E9%99%84%E5%BD%95/1-%E5%8C%BA%E6%AC%BE%E9%93%BE%E7%9B%B8%E5%85%B3%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A.html",target:"_blank",rel:"noopener noreferrer"},o={href:"http://en.wikipedia.org/wiki/Public-key_cryptography",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/imfly/bitcoinbook",target:"_blank",rel:"noopener noreferrer"},f={href:"http://8btc.com/",target:"_blank",rel:"noopener noreferrer"};function b(k,e){const n=t("ExternalLinkIcon");return d(),r("div",null,[e[7]||(e[7]=i('<h1 id="区块链相关名词汇总" tabindex="-1"><a class="header-anchor" href="#区块链相关名词汇总"><span>区块链相关名词汇总</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>新技术的最大问题是新概念太多。例如加密的概念，包括散列、签名、公钥、私钥、对称和不对称加密，还有分布式哈希表、信任网络等。还有额外的内部术语，如“区块”，“确认”，“挖矿”，“SPV客户”和“51％攻击”等，这通常是学习掌握新技术过程中必须了解的。为了方便，在社区小伙伴<code>珍惜</code>、<code>一</code>、<code>Tailor</code>、<code>Mojie</code>等帮助下，通过网络收集，并进行了适当删改整理，供大家在学习乃至工作过程中参考使用。</p>',3)),a("p",null,[a("a",c,[e[0]||(e[0]=l("原文地址")),h(n)])]),e[8]||(e[8]=i('<h2 id="密码学" tabindex="-1"><a class="header-anchor" href="#密码学"><span>密码学</span></a></h2><h3 id="计算上不可行" tabindex="-1"><a class="header-anchor" href="#计算上不可行"><span>计算上不可行</span></a></h3><p>一个处理被称为是计算上不可行，如果有人想有兴趣完成一个处理但是需要采取一种不切实际的长的时间来做到这一点的（如几十亿年）。通常，2的80次方的计算步骤被认为是计算上不可行的下限。</p><h3 id="散列" tabindex="-1"><a class="header-anchor" href="#散列"><span>散列</span></a></h3><p>一个散列函数（或散列算法）是一个处理，依靠这个处理，一个文档（比如一个数据块或文件）被加工成看起来完全是随机的小片数据（通常为32个字节），从中没有意义的数据可以被复原为文档，并且最重要的性能是散列一个特定的文档的结果总是一样的。</p><p>此外，极为重要的是，找到具有相同散列的两个文件在计算上是不可能的。一般情况下，即使改变文件的一个字母也将完全打乱散列;例如，“ Saturday”的SHA3散列为c38bbc8e93c09f6ed3fe39b5135da91ad1a99d397ef16948606cdcbd14929f9d，而Caturday的SHA3散列是b4013c0eed56d5a0b448b02ec1d10dd18c1b3832068fbbdc65b98fa9b14b6dbf。散列值经常被用作以下用途：为无法伪造的特定文档而创建的全局商定标识符。</p><h3 id="加密" tabindex="-1"><a class="header-anchor" href="#加密"><span>加密</span></a></h3><p>与被称为钥匙（例如c85ef7d79691fe79573b1a7064c19c1a9819ebdbd1faaab1a8ec92344438aaf4）的短字符串的数据相结合，对文档（明文）所进行的处理。加密会产生一个输出（密文），这个密文可以被其他掌握这个钥匙的人“解密”回原来的明文，但是对于没有掌握钥匙的人来说是解密是费解的且计算上不可行。</p><h3 id="公钥加密" tabindex="-1"><a class="header-anchor" href="#公钥加密"><span>公钥加密</span></a></h3><p>一种特殊的加密，具有在同一时间生成两个密钥的处理（通常称为私钥和公钥），使得利用一个钥匙对文档进行加密后，可以用另外一个钥匙进行解密。一般地，正如其名字所建议的，个人发布他们的公钥，并给自己保留私钥。</p><h3 id="数字签名" tabindex="-1"><a class="header-anchor" href="#数字签名"><span>数字签名</span></a></h3><p>数字签名算法是一种用户可以用私钥为文档产生一段叫做签名的短字符串数据的处理，以至于任何拥有相应公钥，签名和文档的人可以验证（1）该文件是由特定的私钥的拥有者“签名”的，（2）该文档在签名后没有被改变过。请注意，这不同于传统的签名，在传统签名上你可以在签名后涂抹多余的文字，而且这样做无法被分辨;在数字签名后任何对文档的改变会使签名无效。</p><h2 id="区块链" tabindex="-1"><a class="header-anchor" href="#区块链"><span>区块链</span></a></h2><h3 id="地址" tabindex="-1"><a class="header-anchor" href="#地址"><span>地址</span></a></h3><p>一个地址本质上是属于特定用户的公钥的表现;例如，与上面给出的私钥的相关联的地址是cd2a3d9f938e13cd947ec05abc7fe734df8dd826。注意，在实际中，地址从技术上来说是一个公钥的散列值，但为了简单起见，最好忽略这种区别。</p><h3 id="交易" tabindex="-1"><a class="header-anchor" href="#交易"><span>交易</span></a></h3><p>一个交易是一个文档，授权与区块链相关的一些特定的动作。在一种货币里，主要的交易类型是发送的货币单位或代币给别人;在其他系统，如域名注册，作出和完成报价和订立合约的行为也是有效的交易类型。</p><h3 id="区块" tabindex="-1"><a class="header-anchor" href="#区块"><span>区块</span></a></h3><p>一个区块是一个数据包，其中包含零个或多个交易，前块（“父块”）的散列值，以及可选的其它数据。除了初始的“创世区块”以外每个区块都包含它父块的散列值，区块的全部集合被称为区块链，并且包含了一个网络里的全部交易历史。注意有些基于区块链的加密货币使用“总账”这个词语来代替区块链。这2者的意思是大致相同的，虽然在使用“总账”这个术语的系统里，每个区块都通常包括每个账户的目前状态（比如货币余额，部分履行的合约，注册）的全部拷贝，并允许用户抛弃过时的历史数据。</p><h3 id="创世区块-创世区块指区块链上的第一个区块-用来初始化相应的加密货币。" tabindex="-1"><a class="header-anchor" href="#创世区块-创世区块指区块链上的第一个区块-用来初始化相应的加密货币。"><span>创世区块### :创世区块指区块链上的第一个区块，用来初始化相应的加密货币。</span></a></h3><h3 id="帐户" tabindex="-1"><a class="header-anchor" href="#帐户"><span>帐户</span></a></h3><p>帐户是在总账中的记录，由它的地址来索引，总账包含有关该帐户的状态的完整的数据。在一个货币系统里，这包含了货币余额，或许未完成的的交易订单;在其它情况下更复杂的关系可以被存储到账户内。</p><h3 id="随机数" tabindex="-1"><a class="header-anchor" href="#随机数"><span>随机数</span></a></h3><p>在一个区块里的一个无意义的值，为了努力满足工作证明的条件来进行调整。</p><h3 id="挖矿" tabindex="-1"><a class="header-anchor" href="#挖矿"><span>挖矿</span></a></h3><p>挖矿是反复总计交易，构建区块，并尝试不同的随机数，直到找到一个随机数可以符合工作证明的条件的过程。如果一个矿工走运并产生一个有效的区块的话，会被授予的一定数量的币（区块中的交易全部费用）作为奖励。而且所有的矿工开始尝试创建新的区块，这个新区块包含作为父块的最新的区块的散列。</p><h3 id="陈腐区块" tabindex="-1"><a class="header-anchor" href="#陈腐区块"><span>陈腐区块</span></a></h3><p>对于同一个父块，已经有另外一个区块被创建出来之后，又被创建的区块;陈旧区块通常被丢弃，是精力的浪费。</p><h3 id="幽灵-ghost-幽灵是一个协议-通过这个协议-区块可以包含不只是他们父块的散列值-也散列父块的父块的其他子块-被称为叔块-的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性-并减轻了大型矿工在快速区块链上的有优势的问题-因为他们能够立即得知自己的区块-因此不太可能产生陈腐区块。" tabindex="-1"><a class="header-anchor" href="#幽灵-ghost-幽灵是一个协议-通过这个协议-区块可以包含不只是他们父块的散列值-也散列父块的父块的其他子块-被称为叔块-的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性-并减轻了大型矿工在快速区块链上的有优势的问题-因为他们能够立即得知自己的区块-因此不太可能产生陈腐区块。"><span>幽灵（Ghost）### ：幽灵是一个协议，通过这个协议，区块可以包含不只是他们父块的散列值，也散列父块的父块的其他子块（被称为叔块）的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性，并减轻了大型矿工在快速区块链上的有优势的问题，因为他们能够立即得知自己的区块，因此不太可能产生陈腐区块。</span></a></h3><h3 id="叔块" tabindex="-1"><a class="header-anchor" href="#叔块"><span>叔块</span></a></h3><p>是父区块的父区块的子区块，但不是自个的父区块，或更一般的说是祖先的子区块，但不是自己的祖先。如果A是B的一个叔区块，那B是A的侄区块。</p><h3 id="分叉" tabindex="-1"><a class="header-anchor" href="#分叉"><span>分叉</span></a></h3><p>指向同一个父块的2个区块被同时生成的情况，某些部分的矿工看到其中一个区块，其他的矿工则看到另外一个区块。这导致2种区块链同时增长。通常来说，随着在一个链上的矿工得到幸运并且那条链增长的话，所有的矿工都会转到那条链上，数学上分几乎会在4个区块内完结自己。</p><h3 id="硬分叉-是当比特币协议规则发生改变-旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视-矿工会按照他们的规则集-在他们最后见证的区块之后创建区块。" tabindex="-1"><a class="header-anchor" href="#硬分叉-是当比特币协议规则发生改变-旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视-矿工会按照他们的规则集-在他们最后见证的区块之后创建区块。"><span>硬分叉### ，是当比特币协议规则发生改变，旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视，矿工会按照他们的规则集，在他们最后见证的区块之后创建区块。</span></a></h3><h3 id="软分叉-是当比特币协议规则发生改变-旧的节点并不会意识到规则是不同的-它们将遵循改变后的规则集-继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解-或者验证过的区块上进行工作。" tabindex="-1"><a class="header-anchor" href="#软分叉-是当比特币协议规则发生改变-旧的节点并不会意识到规则是不同的-它们将遵循改变后的规则集-继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解-或者验证过的区块上进行工作。"><span>软分叉### ，是当比特币协议规则发生改变，旧的节点并不会意识到规则是不同的，它们将遵循改变后的规则集，继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解，或者验证过的区块上进行工作。</span></a></h3><h3 id="双重花费" tabindex="-1"><a class="header-anchor" href="#双重花费"><span>双重花费</span></a></h3><p>是一个故意的分叉，当一个有着大量挖矿能力的用户发送一个交易来购买产品，在收到产品后又做出另外一个交易把相同量的币发给自己。攻击者创造一个区块，这个区块和包含原始交易的区块在同一个层次上，但是包含并非原始交易而是第二个交易，并且开始在这个分叉上开始挖矿。如果攻击者有超过50％的挖矿能力的话，双重花费最终可以在保证在任何区块深度上成功。低于50％的话，有部分可能性成功。但是它经常在深度2-5上有唯一显著的可能。因此在大多数的加密货币交易所，博彩站点还有金融服务在接受支付之前需要等待6个区块被生产出来（也叫“6次确认”）。</p><h2 id="比特币等区块链产品" tabindex="-1"><a class="header-anchor" href="#比特币等区块链产品"><span>比特币等区块链产品</span></a></h2><h3 id="bip" tabindex="-1"><a class="header-anchor" href="#bip"><span>BIP</span></a></h3><p>比特币改进提议 （Bitcoin Improvement Proposals 的缩写），指比特币社区成员所提交的一系列改进比特币的提议。例如，BIP0021是一项改进比特币统一资源标识符（URI）计划的提议。</p><h3 id="比特币" tabindex="-1"><a class="header-anchor" href="#比特币"><span>比特币</span></a></h3><p>“比特币”既可以指这种虚拟货币单位，也指比特币网络或者网络节点使用的比特币软件。</p><h3 id="确认" tabindex="-1"><a class="header-anchor" href="#确认"><span>确认</span></a></h3><p>当一项交易被区块收录时，我们可以说它有一次确认。矿工们在此区块之后每再产生一个区块，此项交易的确认数就再加一。当确认数达到六及以上时，通常认为这笔交易比较安全并难以逆转。</p><h3 id="难度" tabindex="-1"><a class="header-anchor" href="#难度"><span>难度</span></a></h3><p>整个网络会通过调整“难度”这个变量来控制生成工作量证明所需要的计算力。</p><h3 id="难度目标" tabindex="-1"><a class="header-anchor" href="#难度目标"><span>难度目标</span></a></h3><p>使整个网络的计算力大致每10分钟产生一个区块所需要的难度数值即为难度目标。</p><h3 id="难度调整" tabindex="-1"><a class="header-anchor" href="#难度调整"><span>难度调整</span></a></h3><p>BTC整个网络每产生2,106个区块后会根据之前2,106个区块的算力进行难度调整。</p><h3 id="矿工费" tabindex="-1"><a class="header-anchor" href="#矿工费"><span>矿工费</span></a></h3><p>交易的发起者通常会向网络缴纳一笔矿工费，用以处理这笔交易。大多数的交易需要0.5毫比特币的矿工费。</p><h3 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希"><span>哈希</span></a></h3><p>二进制数据的一种数字指纹。</p><h3 id="矿工" tabindex="-1"><a class="header-anchor" href="#矿工"><span>矿工</span></a></h3><p>矿工指通过不断重复哈希运算来产生工作量证明的各网络节点。</p><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h3><p>比特币网络是一个由若干节点组成的用以广播交易信息和数据区块的P2P网络。</p><h3 id="奖励" tabindex="-1"><a class="header-anchor" href="#奖励"><span>奖励</span></a></h3><p>每一个新区块中都有一定量新创造的比特币用来奖励算出工作量证明的矿工。现阶段每一区块有25比特币的奖励。</p><h3 id="私钥" tabindex="-1"><a class="header-anchor" href="#私钥"><span>私钥</span></a></h3><p>用来解锁对应（钱包）地址的一串字符，例如5J76sF8L5jTtzE96r66Sf8cka9y44wdpJjMwCxR3tzLh3ibVPxh。</p><h3 id="交易-1" tabindex="-1"><a class="header-anchor" href="#交易-1"><span>交易</span></a></h3><p>简单地说，交易指把比特币从一个地址转到另一个地址。更准确地说，一笔“交易”指一个经过签名运算的，表达价值转移的数据结构。每一笔“交易”都经过比特币网络传输，由矿工节点收集并封包至区块中，永久保存在区块链某处。</p><h3 id="钱包" tabindex="-1"><a class="header-anchor" href="#钱包"><span>钱包</span></a></h3><p>钱包指保存比特币地址和私钥的软件，可以用它来接受、发送、储存你的比特币。</p><h3 id="spv客户端-或轻客户端-一个只下载一小部分区块链的客户端-使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证-这是通过有时选择性的下载的小部分的状态-而在区块链验证和维护时-不需要花费兆字节的带宽或者千兆字节的存储空间。" tabindex="-1"><a class="header-anchor" href="#spv客户端-或轻客户端-一个只下载一小部分区块链的客户端-使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证-这是通过有时选择性的下载的小部分的状态-而在区块链验证和维护时-不需要花费兆字节的带宽或者千兆字节的存储空间。"><span>SPV客户端（或轻客户端）### ：一个只下载一小部分区块链的客户端，使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证，这是通过有时选择性的下载的小部分的状态，而在区块链验证和维护时，不需要花费兆字节的带宽或者千兆字节的存储空间。</span></a></h3><h3 id="楔入式侧链技术-pegged-sidechains-它将实现比特币和其他数字资产在多个区块链间的转移-这就意味着用户们在使用他们已有资产的情况下-就可以访问新的加密货币系统。" tabindex="-1"><a class="header-anchor" href="#楔入式侧链技术-pegged-sidechains-它将实现比特币和其他数字资产在多个区块链间的转移-这就意味着用户们在使用他们已有资产的情况下-就可以访问新的加密货币系统。"><span>楔入式侧链技术（ pegged sidechains）### ：它将实现比特币和其他数字资产在多个区块链间的转移，这就意味着用户们在使用他们已有资产的情况下，就可以访问新的加密货币系统。</span></a></h3><h3 id="工作量证明-proof-of-work-一种共识机制-该机制是一方-通常称为证明人-出示计算结果-这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果-任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。" tabindex="-1"><a class="header-anchor" href="#工作量证明-proof-of-work-一种共识机制-该机制是一方-通常称为证明人-出示计算结果-这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果-任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。"><span>工作量证明（Proof-of-Work）### :一种共识机制，该机制是一方（通常称为证明人）出示计算结果，这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果，任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。</span></a></h3><h3 id="权益证明-proof-of-stake-一种共识机制-该机制是当创造一个区块时-矿工需要创建一个-币权-交易-交易会按设定的比例把一些币发送给矿工本身-类似利息。" tabindex="-1"><a class="header-anchor" href="#权益证明-proof-of-stake-一种共识机制-该机制是当创造一个区块时-矿工需要创建一个-币权-交易-交易会按设定的比例把一些币发送给矿工本身-类似利息。"><span>权益证明（Proof of Stake）### : 一种共识机制，该机制是当创造一个区块时，矿工需要创建一个“币权”交易，交易会按设定的比例把一些币发送给矿工本身，类似利息。</span></a></h3><h3 id="股份授权证明机制-dpos-一种共识机制-该机制让每一个持有币的人对整个系统资源当代表的人进行投票-而获得最多票数的101个代表获得进行交易打包计算的权利-而系统给予对应的奖励。" tabindex="-1"><a class="header-anchor" href="#股份授权证明机制-dpos-一种共识机制-该机制让每一个持有币的人对整个系统资源当代表的人进行投票-而获得最多票数的101个代表获得进行交易打包计算的权利-而系统给予对应的奖励。"><span>股份授权证明机制（DPOS）### : 一种共识机制，该机制让每一个持有币的人对整个系统资源当代表的人进行投票，而获得最多票数的101个代表获得进行交易打包计算的权利，而系统给予对应的奖励。</span></a></h3><h3 id="rchain" tabindex="-1"><a class="header-anchor" href="#rchain"><span>RChain</span></a></h3><p>是具有并发和分布式的区块链。“分布式”指的是区块链细分成组合件，它连成一个统一的整体，而不需要一次性全部计算（而比特币区块链则需要）。“并发”的意思是，这个分支使不同的进程能够平行运行，而且不会互相干扰。</p><h3 id="rholang" tabindex="-1"><a class="header-anchor" href="#rholang"><span>Rholang</span></a></h3><p>是RChain的本土智能合约语言（或编程语言），一种反射性的、高阶过程编程语言，基于进程演算，允许进程的并行执行和在低阶智能合约基础上组合高阶智能合约，以一种高效和安全的方式，允许在正常的验证基础上进行更好的安全性测试和模拟</p><h3 id="specialk" tabindex="-1"><a class="header-anchor" href="#specialk"><span>SpecialK</span></a></h3><p>一种分布式存储技术的方法，它提供了一个单一领域的特定语言，为程序员们提供了一个熟悉的、统一的API，通过API他们可以访问分布在整个网络的数据。数据被分配时始终兼顾冗余度和敏感度，确保随时随地有需求时它都是可用的，并且不需要时就会隐藏。</p><h3 id="零知识证明-证明者和验证者之间进行交互-证明者能够在不向验证者提供任何有用的信息的情况下-使验证者相信某个论断是正确的。" tabindex="-1"><a class="header-anchor" href="#零知识证明-证明者和验证者之间进行交互-证明者能够在不向验证者提供任何有用的信息的情况下-使验证者相信某个论断是正确的。"><span>零知识证明### : 证明者和验证者之间进行交互，证明者能够在不向验证者提供任何有用的信息的情况下，使验证者相信某个论断是正确的。</span></a></h3><h3 id="比特币的可替换性-fungibitlity-持有的比特币不管之前曾进行过哪些交易历史-包括可能涉及过毒品交易等-这都与刚挖出来的-原币-一样-完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源-一旦涉及犯罪-他们会不接受。" tabindex="-1"><a class="header-anchor" href="#比特币的可替换性-fungibitlity-持有的比特币不管之前曾进行过哪些交易历史-包括可能涉及过毒品交易等-这都与刚挖出来的-原币-一样-完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源-一旦涉及犯罪-他们会不接受。"><span>比特币的可替换性(Fungibitlity）### ：持有的比特币不管之前曾进行过哪些交易历史，包括可能涉及过毒品交易等，这都与刚挖出来的“原币”一样，完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源，一旦涉及犯罪，他们会不接受。</span></a></h3><h3 id="环签名" tabindex="-1"><a class="header-anchor" href="#环签名"><span>环签名</span></a></h3><p>因签名中参数Ci(i=1,2,…,n)根据一定的规则首尾相接组成环状而得名。其实就是实际的签名者用其他可能签字者的公钥产生一个带有断口的环，然后用私钥将断口连成一个完整的环。任何验证人利用环成员的公钥都可以验证一个环签名是否由某个可能的签名人生成。</p><h3 id="隔离见证" tabindex="-1"><a class="header-anchor" href="#隔离见证"><span>隔离见证</span></a></h3><p>Segregated Witness，简称SW。用户在交易时，会把比特币传送到有别於传统的地址。当要使用这些比特币的时候，其签署 (即见证)并不会记录为交易ID的一部份，而是另外处理。也就是说，交易ID完全是由交易状态 (即结馀的进出) 决定，不受见证部份影响。</p><h3 id="闪电网络-lightning-network-一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道-就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付-双方若无直接的点对点支付通道-只要网络中存在一条连通双方的、由多个支付通道构成的支付路径-闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。" tabindex="-1"><a class="header-anchor" href="#闪电网络-lightning-network-一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道-就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付-双方若无直接的点对点支付通道-只要网络中存在一条连通双方的、由多个支付通道构成的支付路径-闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。"><span>闪电网络（Lightning Network）### ：一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道，就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付；双方若无直接的点对点支付通道，只要网络中存在一条连通双方的、由多个支付通道构成的支付路径，闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。</span></a></h3><h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化"><span>序列化</span></a></h3><p>将一个数据结构转换成一个字节序列的过程。以太坊在内部使用的编码格式称为递归长度前缀编码（RLP）。</p><h3 id="帕特里夏树" tabindex="-1"><a class="header-anchor" href="#帕特里夏树"><span>帕特里夏树</span></a></h3><p>一种数据结构，它会存储每个帐户的状态。这个树的建立是通过从每个节点开始，然后将节点分成多达16个组，然后散列每个组，然后对散列结果继续散列，直到整个树有一个最后的“根散列”。该树具有重要的特性：（1）只有正好一个可能的树，因此，每个数据集对应一个可能的根散列（2）很容易的更新，添加，或者删除树节点，以及生成新的根散列，（3）不改变根散列的话没有办法修改树的任何部分，所以如果根散列被包括在签名的文档或有效区块中话，签名或工作证明可以担保整个树（ 4）任何人只可以提供一个下到特定节点的分支，可以加密得证明拥有确切内容的节点的确是在树里。帕特里夏树也被用来存储账户，交易已经叔块的内部存储。在这里能看到更详细的说明。</p><h3 id="帐户随机数" tabindex="-1"><a class="header-anchor" href="#帐户随机数"><span>帐户随机数</span></a></h3><p>每个账号的交易计数。这样可以防止重放攻击，其中一个交易发送比如 20个币从A到B，并可以被B重放一遍又一遍，直到不断抽干A的账户余额。</p><h3 id="evm代码" tabindex="-1"><a class="header-anchor" href="#evm代码"><span>EVM代码</span></a></h3><p>以太坊虚拟机代码，以太坊的区块链可以包含的编程语言的代码。与帐户相关联的EVM代码在每次消息被发到这个账户的时候被执行，并且具有读/写存储和自身发送消息的能力。</p><h3 id="消息" tabindex="-1"><a class="header-anchor" href="#消息"><span>消息</span></a></h3><p>一种由EVM代码从一个账户发送到另一个账户的“虚拟交易”。需要注意的是“交易”和“消息”在以太坊种是不同的;在以太坊用语的“交易”具体指的是物理的数字签名的一串数据，并且每个交易触发相关联的消息，但消息也可以通过EVM代码发送，在这种情况下，它们从不表示成任何数据。</p><h3 id="储存" tabindex="-1"><a class="header-anchor" href="#储存"><span>储存</span></a></h3><p>包含在每个帐户里的键／值数据库，其中键和值都是32个字节的字符串，但可以以其他方式包含任何东西。</p><h3 id="外部拥有账户" tabindex="-1"><a class="header-anchor" href="#外部拥有账户"><span>外部拥有账户</span></a></h3><p>通过私钥控制的账户。外部拥有账户不能包含EVM代码。</p><h3 id="合约" tabindex="-1"><a class="header-anchor" href="#合约"><span>合约</span></a></h3><p>一个包含并且受EVM的代码控制的账户。合约不能通过私钥直接进行控制，除非被编译成EVM代码，一旦合约被发行就没有所有者。</p><h3 id="以太-ether-以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。" tabindex="-1"><a class="header-anchor" href="#以太-ether-以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。"><span>以太（Ether）### ：以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。</span></a></h3><h3 id="瓦斯" tabindex="-1"><a class="header-anchor" href="#瓦斯"><span>瓦斯</span></a></h3><p>大致相当于计算步骤的计量。每一笔交易需要包括瓦斯的限制，还有愿意为每瓦斯支付的费用;矿工可以选择是否收录交易和收集费用。由包括原始消息以及任何可能被触发的子消息的交易产生的计算所使用的瓦斯总量，如果大于或者等于瓦斯的限制，则交易被处理。除非交易仍然有效并且费用仍然被矿工收集，否则瓦斯的总量小于限制则所有变更被还原。每一个操作都有瓦斯支出;对于大多数操作，花费是1瓦斯，尽管一些昂贵的操作会支出高达100瓦斯，交易本身会有500瓦斯的支出。</p><h2 id="延伸概念" tabindex="-1"><a class="header-anchor" href="#延伸概念"><span>延伸概念</span></a></h2><h3 id="分散化应用程序" tabindex="-1"><a class="header-anchor" href="#分散化应用程序"><span>分散化应用程序</span></a></h3><p>为了某些特定目的（如：在某些市场上连接买家和卖家，共享文件，网络文件存储，维持货币），无论是使用还是创建一个分散的网络，由许多人来运行的程序。基于以太坊的分散式的应用程序（也称为Đapps，其中Đ为北欧字母“eth”）通常包括一个HTML/ JavaScript的网页，并且如果在以太浏览器内部查看的话，可识别特殊的Javascript的API，用于发送交易数据到区块链，从区块链读取数据，和耳语，蜂群交互数据。一个Đapp通常在区块链上有特定的相关合约，但有利于创造许多合约的Đapps是完全可能的。</p><h3 id="分散化组织-gdo-一个没有中央领导-而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻-但有时混淆的概念是-地理上的分散化组织-gdo-组织里人在相距甚远的地方工作-甚至可能都没有办公室-gdos可能会有正式的中央领导。" tabindex="-1"><a class="header-anchor" href="#分散化组织-gdo-一个没有中央领导-而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻-但有时混淆的概念是-地理上的分散化组织-gdo-组织里人在相距甚远的地方工作-甚至可能都没有办公室-gdos可能会有正式的中央领导。"><span>分散化组织（GDO）### ：一个没有中央领导，而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻，但有时混淆的概念是“地理上的分散化组织”（GDO），组织里人在相距甚远的地方工作，甚至可能都没有办公室; GDOs可能会有正式的中央领导。</span></a></h3><h3 id="忒修斯标准" tabindex="-1"><a class="header-anchor" href="#忒修斯标准"><span>忒修斯标准</span></a></h3><p>用于查明一个组织的分散化程度的测试。测试如下：假设组织有N个人，然后外星人一次从组织中（比如每周一次）挑选K个人出来，摧毁他们存在，在每个群里以K个对组织不了解的新人来代替。现在为了让组织起作用，K可以高达多少人呢？在独裁政权里，当K＝1即独裁者被摧毁后就会失败。美国政府稍微好一点，但如果参议院和国会的所有638成员突然消失了的话，仍然会有很大的问题。但像比特币或BitTorrent即便对极高的K值也具有复原性，因为新的代理人可以简单地根据自己的经济动机来填补缺失的角色。还有一个更严格的测试，拜占庭忒修斯标准，它包含同一时间内随机的用恶意行为者取代K个用户一段时间，之后再替换成新用户。</p><h3 id="委任式民主-或流动式民主-一个对于dos-分散式组织-和dao-分散式自治组织-的治理机制-在默认情况下每个人对每件事情都投票-但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡-完全直接民主-每个人都有相同的权力-和专家意见-有某些特定人提供的快速决策能力-允许人们自己顺从朋友-政治家-领域专家或者自己选择的任何人-。" tabindex="-1"><a class="header-anchor" href="#委任式民主-或流动式民主-一个对于dos-分散式组织-和dao-分散式自治组织-的治理机制-在默认情况下每个人对每件事情都投票-但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡-完全直接民主-每个人都有相同的权力-和专家意见-有某些特定人提供的快速决策能力-允许人们自己顺从朋友-政治家-领域专家或者自己选择的任何人-。"><span>委任式民主（或流动式民主）### ：一个对于DOs(分散式组织)和DAO(分散式自治组织)的治理机制，在默认情况下每个人对每件事情都投票，但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡，完全直接民主(每个人都有相同的权力)和专家意见/有某些特定人提供的快速决策能力（允许人们自己顺从朋友，政治家，领域专家或者自己选择的任何人）。</span></a></h3><h3 id="部分被投机市场控制的理论上的政府" tabindex="-1"><a class="header-anchor" href="#部分被投机市场控制的理论上的政府"><span>部分被投机市场控制的理论上的政府</span></a></h3><p>最初是由Robin Hanson提出的，为了管理政治组织治理机制。但它实际上是非常适用DOs和DAO的：通过预测市场来管理。从根本上，一些易于衡量成功的标准被选择，还有发行由成功标准的值来决定的代币，这些代币将在未来的某个时间（例如，1年后）被支付，对于每个可能要采取的行动都用一个这样的代币。这些代币都被兑换为相应的美元代币，如果相应的措施被执行,正好1美元会被支付 （如果相应的措施没有被执行，这两种类型的代币支付0美元，所以正在被执行的行动的概率不会影响价格）。市场预计的行动将有最好的结果，当其代币在市场上有高价格时会被执行。这提供了另一种自治的，选择机制，同时奖励专家的意见。</p><h3 id="代币制度" tabindex="-1"><a class="header-anchor" href="#代币制度"><span>代币制度</span></a></h3><p>本质上是可以交易的虚拟代替物。更正式地说，代币制度是一个数据库，它映射地址到数字，并具有以下属性，基本允许的操作是把N个代币从A转给B，条件是N是非负，且N不小于A的当前余额，授权该转账的证件由A进行数字签名。二次“发行”和“消费”的操作也可以存在，交易费用也可以被收集，许多当事人同时进行转账也是可能的。典型应用案例，包括货币，网络加密代币，公司的股份和数字礼品卡。</p><h3 id="身份" tabindex="-1"><a class="header-anchor" href="#身份"><span>身份</span></a></h3><p>一组可以加密验证的互动，具有同一个人创建的的属性。</p><h3 id="唯一的身份" tabindex="-1"><a class="header-anchor" href="#唯一的身份"><span>唯一的身份</span></a></h3><p>一组可以加密验证的互动，具有以下属性：同一个人创建的。再加上一个人不能有多个唯一身份的约束。</p><h3 id="激励相容" tabindex="-1"><a class="header-anchor" href="#激励相容"><span>激励相容</span></a></h3><p>如果每个人都更好的“遵守规则”而不是试图欺骗，除非至少要大量的人都同意同时一起欺骗，那么协议是激励相容的。</p><h3 id="基本收入" tabindex="-1"><a class="header-anchor" href="#基本收入"><span>基本收入</span></a></h3><p>每隔一段时间（比如几个月）就给每一个唯一的身份发送一定量的代币的想法。其最终目的是为了让不愿意工作或者不能工作的人能够依靠这份津贴活下来。这些代币可以简单的凭空制作出来，或者来自收益流（比如来自创收实体或政府）。为了单靠基本收入使人能够生活，可能会用到多个收益流的组合。</p><h3 id="公益" tabindex="-1"><a class="header-anchor" href="#公益"><span>公益</span></a></h3><p>一个为非常多的人提供了一个非常小的好处的服务。这样就没有任何个体对是否进行生产有影响力，因此也没有人有动力来支付。</p><h3 id="声誉" tabindex="-1"><a class="header-anchor" href="#声誉"><span>声誉</span></a></h3><p>身份的一个属性，其他实体认为这个身份可以（1）胜任一些特定的任务，或（2）在一些情况下是值得信赖。比如说不太可能因为短期的获利而出卖别人。</p><h3 id="信任网络" tabindex="-1"><a class="header-anchor" href="#信任网络"><span>信任网络</span></a></h3><p>如下的想法，如果A高度信任B，B高度信任C，则A可能是信任C的。为决定特定个体在特定概念下的可靠性的复杂而有力的机制，理论上可以由这个原则推断出来。</p><h3 id="第三方托管" tabindex="-1"><a class="header-anchor" href="#第三方托管"><span>第三方托管</span></a></h3><p>如果两个低信誉的实体所从事的贸易时，付款人可能希望把钱留在具有高信誉的第三方，并指示只有在产品交付后，才让第三方把钱发给收款人。这减少了付款人或收款人欺诈的风险。</p><h3 id="保证金" tabindex="-1"><a class="header-anchor" href="#保证金"><span>保证金</span></a></h3><p>放入合约里的涉及另外一方的数字资产，如果某些条件不满足时，该资产会自动被对方没收。</p><h3 id="抵押" tabindex="-1"><a class="header-anchor" href="#抵押"><span>抵押</span></a></h3><p>放入合约里的涉及另外一方的数字资产，如果某些条件不满足时，该资产会自动被销毁或据献给慈善或者基本收入基金。也许可以让利益广泛分配，但必须让特定的个人不能显著的受益。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>',135)),a("ul",null,[a("li",null,[e[2]||(e[2]=l("维基百科：")),a("a",o,[e[1]||(e[1]=l("http://en.wikipedia.org/wiki/Public-key_cryptography")),h(n)])]),a("li",null,[e[4]||(e[4]=l("《精通比特币》: ")),a("a",g,[e[3]||(e[3]=l("https://github.com/imfly/bitcoinbook")),h(n)])]),a("li",null,[e[6]||(e[6]=l("巴比特论坛：")),a("a",f,[e[5]||(e[5]=l("http://8btc.com")),h(n)])])])])}const v=s(p,[["render",b],["__file","mingcijieshi.html.vue"]]),x=JSON.parse('{"path":"/docs/tech/mingcijieshi.html","title":"技术向名词","lang":"zh-CN","frontmatter":{"title":"技术向名词","date":"2021-10-20T23:30:52.000Z"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"密码学","slug":"密码学","link":"#密码学","children":[{"level":3,"title":"计算上不可行","slug":"计算上不可行","link":"#计算上不可行","children":[]},{"level":3,"title":"散列","slug":"散列","link":"#散列","children":[]},{"level":3,"title":"加密","slug":"加密","link":"#加密","children":[]},{"level":3,"title":"公钥加密","slug":"公钥加密","link":"#公钥加密","children":[]},{"level":3,"title":"数字签名","slug":"数字签名","link":"#数字签名","children":[]}]},{"level":2,"title":"区块链","slug":"区块链","link":"#区块链","children":[{"level":3,"title":"地址","slug":"地址","link":"#地址","children":[]},{"level":3,"title":"交易","slug":"交易","link":"#交易","children":[]},{"level":3,"title":"区块","slug":"区块","link":"#区块","children":[]},{"level":3,"title":"创世区块### :创世区块指区块链上的第一个区块，用来初始化相应的加密货币。","slug":"创世区块-创世区块指区块链上的第一个区块-用来初始化相应的加密货币。","link":"#创世区块-创世区块指区块链上的第一个区块-用来初始化相应的加密货币。","children":[]},{"level":3,"title":"帐户","slug":"帐户","link":"#帐户","children":[]},{"level":3,"title":"随机数","slug":"随机数","link":"#随机数","children":[]},{"level":3,"title":"挖矿","slug":"挖矿","link":"#挖矿","children":[]},{"level":3,"title":"陈腐区块","slug":"陈腐区块","link":"#陈腐区块","children":[]},{"level":3,"title":"幽灵（Ghost）###  ：幽灵是一个协议，通过这个协议，区块可以包含不只是他们父块的散列值，也散列父块的父块的其他子块（被称为叔块）的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性，并减轻了大型矿工在快速区块链上的有优势的问题，因为他们能够立即得知自己的区块，因此不太可能产生陈腐区块。","slug":"幽灵-ghost-幽灵是一个协议-通过这个协议-区块可以包含不只是他们父块的散列值-也散列父块的父块的其他子块-被称为叔块-的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性-并减轻了大型矿工在快速区块链上的有优势的问题-因为他们能够立即得知自己的区块-因此不太可能产生陈腐区块。","link":"#幽灵-ghost-幽灵是一个协议-通过这个协议-区块可以包含不只是他们父块的散列值-也散列父块的父块的其他子块-被称为叔块-的陈腐区块。这确保了陈腐区块仍然有助于区块链的安全性-并减轻了大型矿工在快速区块链上的有优势的问题-因为他们能够立即得知自己的区块-因此不太可能产生陈腐区块。","children":[]},{"level":3,"title":"叔块","slug":"叔块","link":"#叔块","children":[]},{"level":3,"title":"分叉","slug":"分叉","link":"#分叉","children":[]},{"level":3,"title":"硬分叉### ，是当比特币协议规则发生改变，旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视，矿工会按照他们的规则集，在他们最后见证的区块之后创建区块。","slug":"硬分叉-是当比特币协议规则发生改变-旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视-矿工会按照他们的规则集-在他们最后见证的区块之后创建区块。","link":"#硬分叉-是当比特币协议规则发生改变-旧节点拒绝接受由新节点创造的区块的情况。违反规则的区块将被忽视-矿工会按照他们的规则集-在他们最后见证的区块之后创建区块。","children":[]},{"level":3,"title":"软分叉### ，是当比特币协议规则发生改变，旧的节点并不会意识到规则是不同的，它们将遵循改变后的规则集，继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解，或者验证过的区块上进行工作。","slug":"软分叉-是当比特币协议规则发生改变-旧的节点并不会意识到规则是不同的-它们将遵循改变后的规则集-继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解-或者验证过的区块上进行工作。","link":"#软分叉-是当比特币协议规则发生改变-旧的节点并不会意识到规则是不同的-它们将遵循改变后的规则集-继续接受由新节点创造的区块。矿工们可能会在他们完全没有理解-或者验证过的区块上进行工作。","children":[]},{"level":3,"title":"双重花费","slug":"双重花费","link":"#双重花费","children":[]}]},{"level":2,"title":"比特币等区块链产品","slug":"比特币等区块链产品","link":"#比特币等区块链产品","children":[{"level":3,"title":"BIP","slug":"bip","link":"#bip","children":[]},{"level":3,"title":"比特币","slug":"比特币","link":"#比特币","children":[]},{"level":3,"title":"确认","slug":"确认","link":"#确认","children":[]},{"level":3,"title":"难度","slug":"难度","link":"#难度","children":[]},{"level":3,"title":"难度目标","slug":"难度目标","link":"#难度目标","children":[]},{"level":3,"title":"难度调整","slug":"难度调整","link":"#难度调整","children":[]},{"level":3,"title":"矿工费","slug":"矿工费","link":"#矿工费","children":[]},{"level":3,"title":"哈希","slug":"哈希","link":"#哈希","children":[]},{"level":3,"title":"矿工","slug":"矿工","link":"#矿工","children":[]},{"level":3,"title":"网络","slug":"网络","link":"#网络","children":[]},{"level":3,"title":"奖励","slug":"奖励","link":"#奖励","children":[]},{"level":3,"title":"私钥","slug":"私钥","link":"#私钥","children":[]},{"level":3,"title":"交易","slug":"交易-1","link":"#交易-1","children":[]},{"level":3,"title":"钱包","slug":"钱包","link":"#钱包","children":[]},{"level":3,"title":"SPV客户端（或轻客户端）###  ：一个只下载一小部分区块链的客户端，使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证，这是通过有时选择性的下载的小部分的状态，而在区块链验证和维护时，不需要花费兆字节的带宽或者千兆字节的存储空间。","slug":"spv客户端-或轻客户端-一个只下载一小部分区块链的客户端-使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证-这是通过有时选择性的下载的小部分的状态-而在区块链验证和维护时-不需要花费兆字节的带宽或者千兆字节的存储空间。","link":"#spv客户端-或轻客户端-一个只下载一小部分区块链的客户端-使拥有像智能手机和笔记本电脑之类的低功率或低存储硬件的用户能够保持几乎相同的安全保证-这是通过有时选择性的下载的小部分的状态-而在区块链验证和维护时-不需要花费兆字节的带宽或者千兆字节的存储空间。","children":[]},{"level":3,"title":"楔入式侧链技术（ pegged sidechains）###  ：它将实现比特币和其他数字资产在多个区块链间的转移，这就意味着用户们在使用他们已有资产的情况下，就可以访问新的加密货币系统。","slug":"楔入式侧链技术-pegged-sidechains-它将实现比特币和其他数字资产在多个区块链间的转移-这就意味着用户们在使用他们已有资产的情况下-就可以访问新的加密货币系统。","link":"#楔入式侧链技术-pegged-sidechains-它将实现比特币和其他数字资产在多个区块链间的转移-这就意味着用户们在使用他们已有资产的情况下-就可以访问新的加密货币系统。","children":[]},{"level":3,"title":"工作量证明（Proof-of-Work）###  :一种共识机制，该机制是一方（通常称为证明人）出示计算结果，这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果，任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。","slug":"工作量证明-proof-of-work-一种共识机制-该机制是一方-通常称为证明人-出示计算结果-这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果-任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。","link":"#工作量证明-proof-of-work-一种共识机制-该机制是一方-通常称为证明人-出示计算结果-这个结果众所周知是很难计算的但却很容易验证的。通过验证这个结果-任何人都能够确认证明人执行了一定量的计算工作量来产生这个结果。","children":[]},{"level":3,"title":"权益证明（Proof of Stake）###  : 一种共识机制，该机制是当创造一个区块时，矿工需要创建一个“币权”交易，交易会按设定的比例把一些币发送给矿工本身，类似利息。","slug":"权益证明-proof-of-stake-一种共识机制-该机制是当创造一个区块时-矿工需要创建一个-币权-交易-交易会按设定的比例把一些币发送给矿工本身-类似利息。","link":"#权益证明-proof-of-stake-一种共识机制-该机制是当创造一个区块时-矿工需要创建一个-币权-交易-交易会按设定的比例把一些币发送给矿工本身-类似利息。","children":[]},{"level":3,"title":"股份授权证明机制（DPOS）###  : 一种共识机制，该机制让每一个持有币的人对整个系统资源当代表的人进行投票，而获得最多票数的101个代表获得进行交易打包计算的权利，而系统给予对应的奖励。","slug":"股份授权证明机制-dpos-一种共识机制-该机制让每一个持有币的人对整个系统资源当代表的人进行投票-而获得最多票数的101个代表获得进行交易打包计算的权利-而系统给予对应的奖励。","link":"#股份授权证明机制-dpos-一种共识机制-该机制让每一个持有币的人对整个系统资源当代表的人进行投票-而获得最多票数的101个代表获得进行交易打包计算的权利-而系统给予对应的奖励。","children":[]},{"level":3,"title":"RChain","slug":"rchain","link":"#rchain","children":[]},{"level":3,"title":"Rholang","slug":"rholang","link":"#rholang","children":[]},{"level":3,"title":"SpecialK","slug":"specialk","link":"#specialk","children":[]},{"level":3,"title":"零知识证明### : 证明者和验证者之间进行交互，证明者能够在不向验证者提供任何有用的信息的情况下，使验证者相信某个论断是正确的。","slug":"零知识证明-证明者和验证者之间进行交互-证明者能够在不向验证者提供任何有用的信息的情况下-使验证者相信某个论断是正确的。","link":"#零知识证明-证明者和验证者之间进行交互-证明者能够在不向验证者提供任何有用的信息的情况下-使验证者相信某个论断是正确的。","children":[]},{"level":3,"title":"比特币的可替换性(Fungibitlity）###  ：持有的比特币不管之前曾进行过哪些交易历史，包括可能涉及过毒品交易等，这都与刚挖出来的“原币”一样，完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源，一旦涉及犯罪，他们会不接受。","slug":"比特币的可替换性-fungibitlity-持有的比特币不管之前曾进行过哪些交易历史-包括可能涉及过毒品交易等-这都与刚挖出来的-原币-一样-完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源-一旦涉及犯罪-他们会不接受。","link":"#比特币的可替换性-fungibitlity-持有的比特币不管之前曾进行过哪些交易历史-包括可能涉及过毒品交易等-这都与刚挖出来的-原币-一样-完全可以平等替换。现在有交易所或其他服务公司会追踪用户账户比特币的来源-一旦涉及犯罪-他们会不接受。","children":[]},{"level":3,"title":"环签名","slug":"环签名","link":"#环签名","children":[]},{"level":3,"title":"隔离见证","slug":"隔离见证","link":"#隔离见证","children":[]},{"level":3,"title":"闪电网络（Lightning Network）###  ：一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道，就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付；双方若无直接的点对点支付通道，只要网络中存在一条连通双方的、由多个支付通道构成的支付路径，闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。","slug":"闪电网络-lightning-network-一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道-就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付-双方若无直接的点对点支付通道-只要网络中存在一条连通双方的、由多个支付通道构成的支付路径-闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。","link":"#闪电网络-lightning-network-一个可扩展的微支付通道网络。交易双方若在区块链上预先设有支付通道-就可以多次、高频、双向地通过轧差方式实现瞬间确认的微支付-双方若无直接的点对点支付通道-只要网络中存在一条连通双方的、由多个支付通道构成的支付路径-闪电网络也可以利用这条支付路径实现资金在双方之间的可靠转移。","children":[]},{"level":3,"title":"序列化","slug":"序列化","link":"#序列化","children":[]},{"level":3,"title":"帕特里夏树","slug":"帕特里夏树","link":"#帕特里夏树","children":[]},{"level":3,"title":"帐户随机数","slug":"帐户随机数","link":"#帐户随机数","children":[]},{"level":3,"title":"EVM代码","slug":"evm代码","link":"#evm代码","children":[]},{"level":3,"title":"消息","slug":"消息","link":"#消息","children":[]},{"level":3,"title":"储存","slug":"储存","link":"#储存","children":[]},{"level":3,"title":"外部拥有账户","slug":"外部拥有账户","link":"#外部拥有账户","children":[]},{"level":3,"title":"合约","slug":"合约","link":"#合约","children":[]},{"level":3,"title":"以太（Ether）###  ：以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。","slug":"以太-ether-以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。","link":"#以太-ether-以太坊网络的内部基础的加密代币。以太是用来支付交易和以太坊交易的计算费用。","children":[]},{"level":3,"title":"瓦斯","slug":"瓦斯","link":"#瓦斯","children":[]}]},{"level":2,"title":"延伸概念","slug":"延伸概念","link":"#延伸概念","children":[{"level":3,"title":"分散化应用程序","slug":"分散化应用程序","link":"#分散化应用程序","children":[]},{"level":3,"title":"分散化组织（GDO）###  ：一个没有中央领导，而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻，但有时混淆的概念是“地理上的分散化组织”（GDO），组织里人在相距甚远的地方工作，甚至可能都没有办公室; GDOs可能会有正式的中央领导。","slug":"分散化组织-gdo-一个没有中央领导-而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻-但有时混淆的概念是-地理上的分散化组织-gdo-组织里人在相距甚远的地方工作-甚至可能都没有办公室-gdos可能会有正式的中央领导。","link":"#分散化组织-gdo-一个没有中央领导-而是使用正式民主投票进程和共识主动性自我组织的结合来作为其基本操作原则。一个不太令人印象深刻-但有时混淆的概念是-地理上的分散化组织-gdo-组织里人在相距甚远的地方工作-甚至可能都没有办公室-gdos可能会有正式的中央领导。","children":[]},{"level":3,"title":"忒修斯标准","slug":"忒修斯标准","link":"#忒修斯标准","children":[]},{"level":3,"title":"委任式民主（或流动式民主）###  ：一个对于DOs(分散式组织)和DAO(分散式自治组织)的治理机制，在默认情况下每个人对每件事情都投票，但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡，完全直接民主(每个人都有相同的权力)和专家意见/有某些特定人提供的快速决策能力（允许人们自己顺从朋友，政治家，领域专家或者自己选择的任何人）。","slug":"委任式民主-或流动式民主-一个对于dos-分散式组织-和dao-分散式自治组织-的治理机制-在默认情况下每个人对每件事情都投票-但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡-完全直接民主-每个人都有相同的权力-和专家意见-有某些特定人提供的快速决策能力-允许人们自己顺从朋友-政治家-领域专家或者自己选择的任何人-。","link":"#委任式民主-或流动式民主-一个对于dos-分散式组织-和dao-分散式自治组织-的治理机制-在默认情况下每个人对每件事情都投票-但在某些特定的问题上个人可以选择特定的他人为他们投票。这个想法概括了以下2种民主的权衡-完全直接民主-每个人都有相同的权力-和专家意见-有某些特定人提供的快速决策能力-允许人们自己顺从朋友-政治家-领域专家或者自己选择的任何人-。","children":[]},{"level":3,"title":"部分被投机市场控制的理论上的政府","slug":"部分被投机市场控制的理论上的政府","link":"#部分被投机市场控制的理论上的政府","children":[]},{"level":3,"title":"代币制度","slug":"代币制度","link":"#代币制度","children":[]},{"level":3,"title":"身份","slug":"身份","link":"#身份","children":[]},{"level":3,"title":"唯一的身份","slug":"唯一的身份","link":"#唯一的身份","children":[]},{"level":3,"title":"激励相容","slug":"激励相容","link":"#激励相容","children":[]},{"level":3,"title":"基本收入","slug":"基本收入","link":"#基本收入","children":[]},{"level":3,"title":"公益","slug":"公益","link":"#公益","children":[]},{"level":3,"title":"声誉","slug":"声誉","link":"#声誉","children":[]},{"level":3,"title":"信任网络","slug":"信任网络","link":"#信任网络","children":[]},{"level":3,"title":"第三方托管","slug":"第三方托管","link":"#第三方托管","children":[]},{"level":3,"title":"保证金","slug":"保证金","link":"#保证金","children":[]},{"level":3,"title":"抵押","slug":"抵押","link":"#抵押","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/tech/名词解释.md"}');export{v as comp,x as data};
