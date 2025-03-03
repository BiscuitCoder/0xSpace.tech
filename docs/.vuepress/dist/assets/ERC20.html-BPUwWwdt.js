import{_ as r,c as d,a as s,b as a,d as i,e as l,o as t,r as o}from"./app-BVXilGr8.js";const c={},p={href:"https://docs.openzeppelin.com/contracts/4.x/erc20",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Blockchain-Engineer-Learning/Contract-Interpretation/tree/main/ERC20",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/Blockchain-Engineer-Learning/Contract-Interpretation/blob/main/ERC20/contracts/IERC20.sol",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Blockchain-Engineer-Learning/Contract-Interpretation/blob/main/ERC20/contracts/IERC20Metadata.sol",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Blockchain-Engineer-Learning/Contract-Interpretation/blob/main/ERC20/contracts/ERC20.sol",target:"_blank",rel:"noopener noreferrer"},E={href:"https://learnblockchain.cn/article/3836",target:"_blank",rel:"noopener noreferrer"};function w(x,n){const e=o("ExternalLinkIcon");return t(),d("div",null,[n[18]||(n[18]=s("h1",{id:"erc20解读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#erc20解读"},[s("span",null,"ERC20解读")])],-1)),s("p",null,[s("strong",null,[n[2]||(n[2]=a("参考 ")),s("strong",null,[s("a",p,[n[0]||(n[0]=s("strong",null,"OpenZepplin文档",-1)),i(e)])]),n[3]||(n[3]=a(" 和 ")),s("strong",null,[s("a",u,[n[1]||(n[1]=s("strong",null,"以太坊官方开发者文档",-1)),i(e)])]),n[4]||(n[4]=a("，结合自己的理解。"))])]),s("p",null,[n[6]||(n[6]=a("博客的 Markdown 编辑器暂不支持 Solidity 语法高亮，为了更好阅读代码，可以去 ")),s("a",v,[n[5]||(n[5]=s("strong",null,"我的GitHub仓库",-1)),i(e)]),n[7]||(n[7]=a(" 。"))]),n[19]||(n[19]=s("h2",{id:"什么是erc20",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#什么是erc20"},[s("span",null,[s("strong",null,"什么是ERC20")])])],-1)),s("p",null,[n[9]||(n[9]=s("strong",null,"ERC20（Ethereum Request for Comments 20）一种代币标准。",-1)),n[10]||(n[10]=a()),s("a",m,[n[8]||(n[8]=s("strong",null,"EIP-20",-1)),i(e)]),n[11]||(n[11]=a(" 中提出。"))]),n[20]||(n[20]=l(`<p><strong>ERC20 代币合约跟踪同质化（可替代）代币：任何一个代币都完全等同于任何其他代币；没有任何代币具有与之相关的特殊权利或行为。这使得 ERC20 代币可用于交换货币、投票权、质押等媒介。</strong></p><h2 id="为什么要遵守erc20" tabindex="-1"><a class="header-anchor" href="#为什么要遵守erc20"><span><strong>为什么要遵守ERC20</strong></span></a></h2><p><strong>EIP-20 中的动机：</strong></p><blockquote><p><strong>允许以太坊上的任何代币被其他应用程序（从钱包到去中心化交易所）重新使用的标准接口。</strong></p></blockquote><p><strong>以太坊上的所有应用都默认支持 ERC20 ，如果你想自己发币，那么你的代码必须遵循 ERC20 标准，这样钱包（如MetaMask）等应用才能将你的币显示出来。</strong></p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span><strong>代码实现</strong></span></a></h2><p><strong>需要实现以下函数和事件：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function name() public view returns (string)</span>
<span class="line"> function symbol() public view returns (string)</span>
<span class="line"> function decimals() public view returns (uint8)</span>
<span class="line"> function totalSupply() public view returns (uint256)</span>
<span class="line"> function balanceOf(address _owner) public view returns (uint256 balance)</span>
<span class="line"> function transfer(address _to, uint256 _value) public returns (bool success)</span>
<span class="line"> function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)</span>
<span class="line"> function approve(address _spender, uint256 _value) public returns (bool success)</span>
<span class="line"> function allowance(address _owner, address _spender) public view returns (uint256 remaining)</span>
<span class="line"> ​</span>
<span class="line"> event Transfer(address indexed _from, address indexed _to, uint256 _value)</span>
<span class="line"> event Approval(address indexed _owner, address indexed _spender, uint256 _value)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 OpenZeppllin 提供的库能够轻松快速地构建 ERC20 Token 。</strong></p><h3 id="快速构建" tabindex="-1"><a class="header-anchor" href="#快速构建"><span><strong>快速构建</strong></span></a></h3><p><strong>这是一个 GLD token 。</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// contracts/GLDToken.sol</span>
<span class="line"> // SPDX-License-Identifier: MIT</span>
<span class="line"> pragma solidity ^0.8.0;</span>
<span class="line"> ​</span>
<span class="line"> import &quot;@openzeppelin/contracts/token/ERC20/ERC20.sol&quot;;</span>
<span class="line"> ​</span>
<span class="line"> contract GLDToken is ERC20 {</span>
<span class="line">     constructor(uint256 initialSupply) ERC20(&quot;Gold&quot;, &quot;GLD&quot;) {</span>
<span class="line">         _mint(msg.sender, initialSupply);</span>
<span class="line">     }</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通常，我们定义代币的发行量和代币名称及符号。</strong></p><h3 id="ierc20" tabindex="-1"><a class="header-anchor" href="#ierc20"><span><strong>IERC20</strong></span></a></h3><p><strong>先来看下 ERC20 的接口（IERC20），这方便我们在开发中直接定义 ERC20 代币。</strong></p><p><strong>同样地，OpenZepplin 为我们提供了相应的库，方便开发者导入即用。</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import &quot;@openzeppelin/contracts/token/ERC20/IERC20.sol&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong><strong>EIP 中定义的 ERC20 标准接口：</strong></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pragma solidity ^0.8.0;</span>
<span class="line"> ​</span>
<span class="line"> interface IERC20 {</span>
<span class="line">     event Transfer(address indexed from, address indexed to, uint256 value);</span>
<span class="line">     event Approval(address indexed owner, address indexed spender, uint256 value);</span>
<span class="line">     </span>
<span class="line">     function totalSupply() external view returns (uint256);</span>
<span class="line">     function balanceOf(address account) external view returns (uint256);</span>
<span class="line">     function transfer(address to, uint256 amount) external returns (bool);</span>
<span class="line">     function allowance(address owner, address spender) external view returns (uint256);</span>
<span class="line">     function approve(address spender, uint256 amount) external returns (bool);</span>
<span class="line">     function transferFrom(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) external returns (bool);</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逐一分析" tabindex="-1"><a class="header-anchor" href="#逐一分析"><span><strong>逐一分析</strong></span></a></h4><p><strong>函数：</strong></p><ul><li><code>totalSupply()</code> ：返回总共的代币数量。</li><li><code>balanceOf(address account)</code> ：返回 <code>account</code> 地址拥有的代币数量。</li><li><code>transfer(address to, uint256 amount)</code> ：将 <strong><code>amount</code></strong> 数量的代币发送给 <strong><code>to</code></strong> 地址，返回布尔值告知是否执行成功。触发 <strong><code>Transfer</code></strong> 事件。</li><li><code>allowance(address owner, address spender)</code> ：返回授权花费者 <strong><code>spender</code></strong> 通过 <strong><code>transferFrom</code></strong> 代表所有者花费的剩余代币数量。默认情况下为零。当 <strong><code>approve</code></strong> 和 <strong><code>transferFrom</code></strong> 被调用时，值将改变。</li><li><code>approve(address spender, uint256 amount)</code> ：授权 <strong><code>spender</code></strong> 可以花费 <strong><code>amount</code></strong> 数量的代币，返回布尔值告知是否执行成功。触发 <strong><code>Approval</code></strong> 事件。</li><li><code>transferFrom(address from, address to, uint256 amount)</code> ：将 <strong><code>amount</code></strong> 数量的代币从 <strong><code>from</code></strong> 地址发送到 <strong><code>to</code></strong> 地址，返回布尔值告知是否执行成功。触发 <strong><code>Transfer</code></strong> 事件。</li></ul><p><strong>事件（定义中的 <strong><code>indexed</code></strong> 便于查找过滤）：</strong></p><ul><li><code>Transfer(address from, address to, uint256 value)</code> ：当代币被一个地址转移到另一个地址时触发。注意：转移的值可能是 0 。</li><li><code>Approval(address owner, address spender, uint256 value)</code> ：当代币所有者授权别人使用代币时触发，即调用 <strong><code>approve</code></strong> 方法。</li></ul><h4 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span><strong>元数据</strong></span></a></h4><p><strong>一般除了上述必须实现的函数外，还有一些别的方法：</strong></p><ul><li><code>name()</code> ：返回代币名称</li><li><code>symbol()</code> ：返回代币符号</li><li><code>decimals()</code> ：返回代币小数点后位数</li></ul><h3 id="erc20" tabindex="-1"><a class="header-anchor" href="#erc20"><span><strong>ERC20</strong></span></a></h3><p><strong>来看下 ERC20 代币具体是怎么写的。</strong></p><p><strong>同样，OpenZepplin 提供了现成的合约代码：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import &quot;@openzeppelin/contracts/token/ERC20/ERC20.sol&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,31)),s("p",null,[n[13]||(n[13]=a("这里贴一个GitHub源码链接 ")),s("a",b,[n[12]||(n[12]=s("strong",null,"OpenZepplin ERC20",-1)),i(e)])]),n[21]||(n[21]=l(`<h4 id="函数概览" tabindex="-1"><a class="header-anchor" href="#函数概览"><span><strong>函数概览</strong></span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">constructor(name_, symbol_)</span>
<span class="line"> name()</span>
<span class="line"> symbol()</span>
<span class="line"> decimals()</span>
<span class="line"> totalSupply()</span>
<span class="line"> balanceOf(account)</span>
<span class="line"> transfer(to, amount)</span>
<span class="line"> allowance(owner, spender)</span>
<span class="line"> approve(spender, amount)</span>
<span class="line"> transferFrom(from, to, amount)</span>
<span class="line"> increaseAllowance(spender, addedValue)</span>
<span class="line"> decreaseAllowance(spender, subtractedValue)</span>
<span class="line"> _transfer(from, to, amount)</span>
<span class="line"> _mint(account, amount)</span>
<span class="line"> _burn(account, amount)</span>
<span class="line"> _approve(owner, spender, amount)</span>
<span class="line"> _spendAllowance(owner, spender, amount)</span>
<span class="line"> _beforeTokenTransfer(from, to, amount)</span>
<span class="line"> _afterTokenTransfer(from, to, amount)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong>事件（同 IERC20）</strong></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Transfer(from, to, value)</span>
<span class="line"> Approval(owner, spender, value)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逐一分析-1" tabindex="-1"><a class="header-anchor" href="#逐一分析-1"><span><strong>逐一分析</strong></span></a></h4><ul><li><code>constructor(string name, string symbol)</code> ：设定代币的名称和符号。<strong><code>decimals</code></strong> 默认是 18 ，要修改成不同的值你应该重载它。这两个值是不变的，只在构造时赋值一次。</li><li><code>name()</code> ：返回代币的名称。</li><li><code>symbol()</code> ：返回代币的符号，通常是名称的缩写。</li><li><code>decimals()</code> ：返回小数点后位数，通常是 18 ，模仿 Ether 和 wei 。要更改就重写它。</li></ul><p><code>totalSupply()、balanceOf(address account)、transfer(address to, uint256 amount)、 allowance(address owner, address spender)、approve(address spender, uint256 amount)、transferFrom(address from, address to, uint256 amount)</code> 都参考 IERC20 。</p><ul><li><p><code>increaseAllowance(address spender, uint256 addedValue)</code> ：以原子的方式增加 <strong><code>spender</code></strong> 额度。返回布尔值告知是否执行成功，触发 <strong><code>Approval</code></strong> 事件。</p></li><li><p><code>_transfer(address from, address to, uint256 amount)</code> ：转账。这个内部函数相当于 <strong><code>transfer</code></strong> ，可以用于例如实施自动代币费用，削减机制等。触发 <strong><code>Transfer</code></strong> 事件。</p></li><li><p><code>_mint(address account, uint256 amount)</code> ：铸造 <strong><code>amount</code></strong> 数量的代币给 <strong><code>account</code></strong> 地址，增加总发行量。触发 <strong><code>Transfer</code></strong> 事件，其中参数 <strong><code>from</code></strong> 是零地址。</p></li><li><p><code>_burn(address account, uint256 amount)</code> ：从 <strong><code>account</code></strong> 地址中烧毁 <strong><code>amount</code></strong> 数量的代币，减少总发行量。触发 <strong><code>Transfer</code></strong> 事件，其中参数 <strong><code>to</code></strong> 是零地址。</p></li><li><p><code>_approve(address owner, uint256 spender, uint256 amount)</code> ：设定允许 <strong><code>spender</code></strong> 花费 <strong><code>owner</code></strong> 的代币数量。这个内部函数相当于 <strong><code>approve</code></strong> ，可以用于例如为某些子系统设置自动限额等。</p></li><li><p><code>spendAllowance(address owner, address spender, uint256 amount)</code> ：花费 <strong><code>amount</code></strong> 数量的 <strong><code>owner</code></strong> 授权 <strong><code>spender</code></strong> 的代币。在无限 allowance 的情况下不更新 allowance 金额。如果没有足够的余量，则恢复。可能触发 <strong><code>Approval</code></strong> 事件。</p></li><li><p><code>_beforeTokenTransfer(address from, address to, uint256 amount)</code> ：在任何代币转账前的 Hook 。它包括铸币和烧毁。调用条件：</p><ul><li><strong>当 <strong><code>from</code></strong> 和 <strong><code>to</code></strong> 都不是零地址时，</strong> <code>from</code> 手里 <strong><code>amount</code></strong> 数量的代币将发送给 <strong><code>to</code></strong> 。</li><li><strong>当 <strong><code>from</code></strong> 是零地址时，将给 <strong><code>to</code></strong> 铸造 <strong><code>amount</code></strong> 数量的代币。</strong></li><li><strong>当 <strong><code>to</code></strong> 是零地址时，</strong> <code>from</code> 手里 <strong><code>amount</code></strong> 数量的代币将被烧毁。</li><li><code>from</code> 和 <strong><code>to</code></strong> 不能同时为零地址。</li></ul></li><li><p><code>_afterTokenTransfer(address from, address to, uint256 amount)</code> ：在任何代币转账后的 Hook 。它包括铸币和烧毁。调用条件：</p><ul><li><strong>当 <strong><code>from</code></strong> 和 <strong><code>to</code></strong> 都不是零地址时，</strong> <code>from</code> 手里 <strong><code>amount</code></strong> 数量的代币将发送给 <strong><code>to</code></strong> 。</li><li><strong>当 <strong><code>from</code></strong> 是零地址时，将给 <strong><code>to</code></strong> 铸造 <strong><code>amount</code></strong> 数量的代币。</strong></li><li><strong>当 <strong><code>to</code></strong> 是零地址时，</strong> <code>from</code> 手里 <strong><code>amount</code></strong> 数量的代币将被烧毁。</li><li><code>from</code> 和 <strong><code>to</code></strong> 不能同时为零地址。</li></ul></li></ul><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span><strong>小结</strong></span></a></h4><p><strong>ERC20 代码中的  <strong><code>_transfer</code></strong>、</strong> <code>_mint</code> <strong>、</strong> <code>_burn</code> <strong>、</strong> <code>_approve</code> <strong>、</strong> <code>_spendAllowance</code> <strong>、</strong> <code>_beforeTokenTransfer</code> <strong>、</strong> <code>_afterTokenTransfer</code> 都是 <strong><code>internal</code></strong> 函数（其余为 <strong><code>public</code></strong> ），也就是说它们只能被派生合约调用。</p><h2 id="从零开始-自己动手" tabindex="-1"><a class="header-anchor" href="#从零开始-自己动手"><span><strong>从零开始，自己动手</strong></span></a></h2><h3 id="_1-编写ierc20" tabindex="-1"><a class="header-anchor" href="#_1-编写ierc20"><span><strong>1.编写IERC20</strong></span></a></h3>`,12)),s("p",null,[s("a",g,[n[14]||(n[14]=s("strong",null,"IERC20.sol",-1)),i(e)])]),n[22]||(n[22]=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// SPDX-License-Identifier: MIT</span>
<span class="line"> ​</span>
<span class="line"> pragma solidity ^0.8.0;</span>
<span class="line"> ​</span>
<span class="line"> interface IERC20 {</span>
<span class="line">     /// @dev 总发行量</span>
<span class="line">     function totoalSupply() external view returns (uint256);</span>
<span class="line">     /// @dev 查看地址余额</span>
<span class="line">     function balanceOf(address account) external view returns (uint256);</span>
<span class="line">     /// @dev 单地址转账</span>
<span class="line">     function transfer(address account, uint256 amount) external returns (bool);</span>
<span class="line">     /// @dev 查看被授权人代表所有者花费的代币余额</span>
<span class="line">     function allowance(address owner, address spender) external view returns (uint256);</span>
<span class="line">     /// @dev 授权别人花费你拥有的代币</span>
<span class="line">     function approve(address spender, uint256 amount) external returns (bool);</span>
<span class="line">     /// @dev 双地址转账</span>
<span class="line">     function transferFrom(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) external returns (bool);</span>
<span class="line"> ​</span>
<span class="line">     /// @dev 发生代币转移时触发</span>
<span class="line">     event Transfer(address indexed from, address indexed to, uint256 value);</span>
<span class="line">     /// @dev 授权时触发</span>
<span class="line">     event Approval(address indexed owner, address indexed spender, uint256 value);</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-加上metadata" tabindex="-1"><a class="header-anchor" href="#_2-加上metadata"><span><strong>2.加上Metadata</strong></span></a></h3>`,2)),s("p",null,[s("a",f,[n[15]||(n[15]=s("strong",null,"IERC20Metadata.sol",-1)),i(e)])]),n[23]||(n[23]=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// SPDX-License-Identifier: MIT</span>
<span class="line"> ​</span>
<span class="line"> pragma solidity ^0.8.0;</span>
<span class="line"> ​</span>
<span class="line"> import &quot;IERC20.sol&quot;;</span>
<span class="line"> ​</span>
<span class="line"> interface IERC20Metadata is IERC20 {</span>
<span class="line">     /// @dev 代币名称</span>
<span class="line">     function name() external view returns (string memory);</span>
<span class="line">     /// @dev 代币符号</span>
<span class="line">     function symbol() external view returns (string memory);</span>
<span class="line">     /// @dev 小数点后位数</span>
<span class="line">     function decimals() external view returns (uint8);</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-编写erc20" tabindex="-1"><a class="header-anchor" href="#_3-编写erc20"><span><strong>3.编写ERC20</strong></span></a></h3>`,2)),s("p",null,[s("a",h,[n[16]||(n[16]=s("strong",null,"ERC20.sol",-1)),i(e)])]),n[24]||(n[24]=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// SPDX-License-Identifier: MIT</span>
<span class="line"> ​</span>
<span class="line"> pragma solidity ^0.8.0;</span>
<span class="line"> ​</span>
<span class="line"> import &quot;./IERC20.sol&quot;;</span>
<span class="line"> import &quot;./IERC20Metadata.sol&quot;;</span>
<span class="line"> ​</span>
<span class="line"> contract ERC20 is IERC20, IERC30Metadata {</span>
<span class="line">     // 地址余额</span>
<span class="line">     mapping(address =&gt; uint256) private _balances;</span>
<span class="line">     // 授权地址余额</span>
<span class="line">     mapping(address =&gt; mapping(address =&gt; uint256)) private _allowances;</span>
<span class="line"> ​</span>
<span class="line">     uint256 private _totalSupply;</span>
<span class="line"> ​</span>
<span class="line">     string private _name;</span>
<span class="line">     string private _symbol;</span>
<span class="line"> ​</span>
<span class="line">     /// @dev 设定代币名称符号</span>
<span class="line">     constructor(string memory name_, string memory symbol_) {</span>
<span class="line">         _name = name_;</span>
<span class="line">         _symbol = symbol_;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function name() public view virtual override returns (string memory) {</span>
<span class="line">         return _name;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function symbol() public view virtual override returns (string memory) {</span>
<span class="line">         return _symbol;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     /// @dev 小数点位数一般为 18</span>
<span class="line">     function decimals() public view virtual override returns (uint8) {</span>
<span class="line">         return 18;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function totalSupply() public view virtual  override returns (uint256) {</span>
<span class="line">         return _totalSupply;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function balanceOf(address account) public view virtual override returns (uint256) {</span>
<span class="line">         return _balances[account];</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function transfer(address to, uint256 amount) public virtual override returns (bool) {</span>
<span class="line">         address owner = msg.sender;</span>
<span class="line">         _transfer(owner, to, amount);</span>
<span class="line">         return true;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function allowance(address owner, address spender) public view virtual override returns (uint256) {</span>
<span class="line">         return _allowances[owner][spender];</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function approve(address spender, uint256 amount) public virtual override returns (bool) {</span>
<span class="line">         address owner = msg.sender;</span>
<span class="line">         _approve(owner, spender, amount);</span>
<span class="line">         return true;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function transferFrom(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) public virtual override returns (bool) {</span>
<span class="line">         address spender = msg.sender;</span>
<span class="line">         _spendAllowance(from, spender, amount);</span>
<span class="line">         _transfer(from, to, amount);</span>
<span class="line">         return true;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {</span>
<span class="line">         address owner = msg.sender;</span>
<span class="line">         _approve(owner, spender, _allowances[owner][spender] + addedValue);</span>
<span class="line">         return true;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function decreaseAllowance(address spender, uint256 substractedValue) public virtual returns (bool) {</span>
<span class="line">         address owner = msg.sender;</span>
<span class="line">         uint256 currentAllowance = _allowances[owner][spender];</span>
<span class="line">         require(currentAllowance &gt;= substractedValue, &quot;ERC20: decreased allowance below zero&quot;);</span>
<span class="line">         unchecked {</span>
<span class="line">             _approval(owner, spender, currentAllowance - substractedValue);</span>
<span class="line">         }</span>
<span class="line">         return true;</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _transfer(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) internal virtual {</span>
<span class="line">         require(from != address(0), &quot;ERC20: transfer from the zero address&quot;);</span>
<span class="line">         require(to != address(0), &quot;ERC20: transfer to the zero address&quot;);</span>
<span class="line"> ​</span>
<span class="line">         _beforeTokenTransfer(from, to, amount);</span>
<span class="line"> ​</span>
<span class="line">         uint256 fromBalance = _balances[from];</span>
<span class="line">         require(fromBalance &gt;= amount, &quot;ERC20: transfer amount exceeds balance&quot;);</span>
<span class="line">         unchecked {</span>
<span class="line">             _balances[from] = fromBalance - amount;</span>
<span class="line">         }</span>
<span class="line">         _balances[to] += amount;</span>
<span class="line"> ​</span>
<span class="line">         emit Transfer(from, to, amount);</span>
<span class="line"> ​</span>
<span class="line">         _afterTokenTransfer(from, to, amount);</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _mint(address account, uint256 amount) internal virtual {</span>
<span class="line">         require(account != address(0), &quot;ERC20: mint to the zero address&quot;);</span>
<span class="line"> ​</span>
<span class="line">         _beforeTokenTransfer(address(0), account, amount);</span>
<span class="line"> ​</span>
<span class="line">         _totalSupply += amount;</span>
<span class="line">         _balances[account] += amount;</span>
<span class="line">         emit Transfer(address(0), account, amount);</span>
<span class="line"> ​</span>
<span class="line">         _afterTokenTransfer(address(0), account, amount);</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _burn(address account, uint256 amount) internal virtual {</span>
<span class="line">         require(account != address(0), &quot;ERC20: burn from the zero address&quot;);</span>
<span class="line"> ​</span>
<span class="line">         _beforeTokenTransfer(account, address(0), amount);</span>
<span class="line"> ​</span>
<span class="line">         uint256 accountBalance = _balances[account];</span>
<span class="line">         require(accountBalance &gt;= amount, &quot;ERC20: burn amount exceeds balance&quot;);</span>
<span class="line">         unchecked {</span>
<span class="line">             _balances[account] = accountBalance - amount;</span>
<span class="line">         }</span>
<span class="line">         _totalSupply -= amount;</span>
<span class="line"> ​</span>
<span class="line">         emit Transfer(account, address(0), amount);</span>
<span class="line"> ​</span>
<span class="line">         _afterTokenTransfer(account, address(0), amount);</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _approve(</span>
<span class="line">         address owner,</span>
<span class="line">         address spender,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) internal virtual {</span>
<span class="line">         require(owner != address(0), &quot;ERC20: approve from the zero address&quot;);</span>
<span class="line">         require(spender != address(0), &quot;ERC20: approve  to the zero address&quot;);</span>
<span class="line"> ​</span>
<span class="line">         _allowances[owner][spender];</span>
<span class="line">         emit Approval(owner, spender, amount);</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _spendAllowance(</span>
<span class="line">         address owner,</span>
<span class="line">         address spender,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) internal virtual {</span>
<span class="line">         uint256 currentAllowance = allowance(owner, spender);</span>
<span class="line">         if (currentAllowance != type(uint256).max) {</span>
<span class="line">             require(currentAllowance &gt;= amount, &quot;ERC20: insufficient allowance&quot;);</span>
<span class="line">             unchecked {</span>
<span class="line">                 _approve(owner, spender, currentAllowance - amount);</span>
<span class="line">             }</span>
<span class="line">         }</span>
<span class="line">     }</span>
<span class="line"> ​</span>
<span class="line">     function _beforeTokenTransfer(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) internal virtual {}</span>
<span class="line"> ​</span>
<span class="line">     function _afterTokenTransfer(</span>
<span class="line">         address from,</span>
<span class="line">         address to,</span>
<span class="line">         uint256 amount</span>
<span class="line">     ) internal virtual {}</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h2><p><strong>ERC20 其实就是一种最常见的代币标准，它明确了同质化代币的经典功能并规范了开发者编写 token 时的代码，从而方便各种应用适配。</strong></p>`,3)),s("p",null,[s("a",E,[n[17]||(n[17]=a("原文链接")),i(e)])])])}const _=r(c,[["render",w],["__file","ERC20.html.vue"]]),R=JSON.parse('{"path":"/docs/project/ERC20.html","title":"ERC20解析","lang":"zh-CN","frontmatter":{"title":"ERC20解析","date":"2021-10-20T23:30:52.000Z","description":"ERC20解读 参考 OpenZepplin文档 和 以太坊官方开发者文档，结合自己的理解。 博客的 Markdown 编辑器暂不支持 Solidity 语法高亮，为了更好阅读代码，可以去 我的GitHub仓库 。 什么是ERC20 ERC20（Ethereum Request for Comments 20）一种代币标准。 EIP-20 中提出。 E...","head":[["meta",{"property":"og:url","content":"https://0xspace.tech/docs/project/ERC20.html"}],["meta",{"property":"og:site_name","content":"0xSpace-web3发展史|合约开发|学习区块链|转行web3|区块链教程|web3教程|区块链导航"}],["meta",{"property":"og:title","content":"ERC20解析"}],["meta",{"property":"og:description","content":"ERC20解读 参考 OpenZepplin文档 和 以太坊官方开发者文档，结合自己的理解。 博客的 Markdown 编辑器暂不支持 Solidity 语法高亮，为了更好阅读代码，可以去 我的GitHub仓库 。 什么是ERC20 ERC20（Ethereum Request for Comments 20）一种代币标准。 EIP-20 中提出。 E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-26T05:45:55.000Z"}],["meta",{"property":"article:published_time","content":"2021-10-20T23:30:52.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-26T05:45:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ERC20解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-20T23:30:52.000Z\\",\\"dateModified\\":\\"2025-02-26T05:45:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是ERC20","slug":"什么是erc20","link":"#什么是erc20","children":[]},{"level":2,"title":"为什么要遵守ERC20","slug":"为什么要遵守erc20","link":"#为什么要遵守erc20","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":3,"title":"快速构建","slug":"快速构建","link":"#快速构建","children":[]},{"level":3,"title":"IERC20","slug":"ierc20","link":"#ierc20","children":[]},{"level":3,"title":"ERC20","slug":"erc20","link":"#erc20","children":[]}]},{"level":2,"title":"从零开始，自己动手","slug":"从零开始-自己动手","link":"#从零开始-自己动手","children":[{"level":3,"title":"1.编写IERC20","slug":"_1-编写ierc20","link":"#_1-编写ierc20","children":[]},{"level":3,"title":"2.加上Metadata","slug":"_2-加上metadata","link":"#_2-加上metadata","children":[]},{"level":3,"title":"3.编写ERC20","slug":"_3-编写erc20","link":"#_3-编写erc20","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1740548755000,"updatedTime":1740548755000,"contributors":[{"name":"keylen","email":"kelenworks@gmail.com","commits":1}]},"filePathRelative":"docs/project/ERC20.md","autoDesc":true}');export{_ as comp,R as data};
