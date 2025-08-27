# n8n-nodes-msdyn365bc

<div align="center">
  <img src="https://img.shields.io/badge/n8n-Community%20Node-ff5b85?style=for-the-badge&logo=n8n" alt="n8n Community Node">
  <img src="https://img.shields.io/badge/Microsoft-Business%20Central-0078d4?style=for-the-badge&logo=microsoft" alt="Microsoft Business Central">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/npm/v/n8n-nodes-msdyn365bc?style=for-the-badge" alt="npm version">
  <img src="https://img.shields.io/npm/dt/n8n-nodes-msdyn365bc?style=for-the-badge" alt="npm downloads">
</div>

<br>

> 🚀 **A powerful n8n Community Node for seamless integration with Microsoft Dynamics 365 Business Central**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Development](#-development)
- [Contributing](#-contributing)
- [Careers](#-join-our-team)
- [Support](#-support)

---

## Overview

This n8n node enables seamless integration of Microsoft Dynamics 365 Business Central into your automation workflows. With this node, you can read, write, and manage data as well as utilize Business Central APIs directly from n8n.

### 🎯 Why use this node?

- **Complete Integration**: Direct access to all Business Central OData endpoints
- **Easy to Use**: Intuitive configuration without complex setup processes
- **Production-Ready**: Robust error handling and proven best practices
- **Community-Driven**: Active development and support by the community

---

## ✨ Features

<table>
  <tr>
    <td align="center">🔌</td>
    <td><strong>Complete API Integration</strong><br>Access to all Business Central OData endpoints</td>
  </tr>
  <tr>
    <td align="center">📝</td>
    <td><strong>CRUD Operations</strong><br>Create, Read, Update, and Delete records. Currently only read is supported.</td>
  </tr>
  <tr>
    <td align="center">🔐</td>
    <td><strong>Secure Authentication</strong><br>Support for OAuth 2.0 and API Keys</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><strong>Batch Operations</strong><br>Efficient processing of multiple records</td>
  </tr>
  <tr>
    <td align="center">🛡️</td>
    <td><strong>Error Handling</strong><br>Robust error handling and retry logic</td>
  </tr>
  <tr>
    <td align="center">🔍</td>
    <td><strong>Metadata Support</strong><br>Automatic detection of available entities and fields</td>
  </tr>
</table>

---

## 🚀 Installation

### Option 1: npm (recommended)

```bash
npm install n8n-nodes-msdyn365bc
```

### Option 2: n8n Community Package Manager

1. Open n8n
2. Navigate to **Settings** → **Community Nodes**
3. Click **Install a community node**
4. Enter `n8n-nodes-msdyn365bc`
5. Click **Install**
6. If you need help with that, check the <a href="https://docs.n8n.io/integrations/community-nodes/installation/gui-install/" rel="nofollow"><strong>Install community nodes</strong></a>
   
### Option 3: Manual Installation (Development)

```bash
git clone https://github.com/[your-username]/n8n-nodes-msdyn365bc.git
cd n8n-nodes-msdyn365bc
npm install
npm run build
npm link
```

---

## ⚙️ Configuration

### 🔐 Setting up Authentication

#### OAuth 2.0 (recommended)

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Client ID** | Azure App Registration Client ID | `12345678-1234-1234-1234-123456789abc` |
| **Client Secret** | Azure App Registration Secret | `your-client-secret` |
| **Tenant ID** | Azure AD Tenant ID | `your-tenant-id` |
| **Environment URL** | Business Central API URL | `api.businesscentral.dynamics.com` |

#### API Key (Alternative)

| Parameter | Description |
|-----------|-------------|
| **Access Key** | Business Central Web Service Access Key |
| **Environment URL** | Business Central Environment URL |

### 🌐 Environment Configuration

```javascript
// Example Environment URL
https://api.businesscentral.dynamics.com/v2.0/[tenant-id]/[environment-name]/api/v2.0
```

---

## 📖 Usage

### 🔧 Basic Operations

#### 📊 Reading Records

```json
{
  "operation": "get",
  "resource": "customers",
  "options": {
    "filter": "Name eq 'Contoso Ltd.'",
    "select": ["No", "Name", "Email"]
  }
}
```

#### ➕ Creating New Records

```json
{
  "operation": "create",
  "resource": "items",
  "body": {
    "No": "ITEM001",
    "Description": "New Item",
    "UnitPrice": 99.99
  }
}
```

#### ✏️ Updating Records

```json
{
  "operation": "update",
  "resource": "customers",
  "recordId": "01445544-0000-0000-0000-000000000000",
  "body": {
    "Email": "newemail@example.com"
  }
}
```

### 📚 Available Resources

<details>
<summary><strong>Click here for a complete list</strong></summary>

- 👥 **customers** - Manage customers
- 🏢 **vendors** - Manage vendors
- 📦 **items** - Manage items
- 🛒 **salesOrders** - Sales orders
- 📋 **purchaseOrders** - Purchase orders
- 📈 **generalLedgerEntries** - General ledger entries
- 📊 **dimensions** - Dimensions
- 🏛️ **companies** - Companies
- 💰 **payments** - Payments
- 📄 **documents** - Documents
- 🔄 **workflows** - Workflows
- **and many more...**

</details>

---

## 🛠️ Development

### 📋 Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js) Node.js 18+
- ![npm](https://img.shields.io/badge/npm-8+-cb3837?logo=npm) npm 8+
- ![n8n](https://img.shields.io/badge/n8n-latest-ff5b85?logo=n8n) n8n (for local testing)

### 🏗️ Setup

```bash
# Clone repository
git clone https://github.com/[your-username]/n8n-msdyn365bc.git
cd n8n-msdyn365bc

# Install dependencies
npm install
```

### 🔨 Build & Test

```bash
# Build project
npm run build

# Run tests
npm test
npm run test:coverage

# Local development
npm run dev
# In another terminal
n8n start
```

---

## 📋 API Reference

### 🔧 Supported Operations

<table>
  <thead>
    <tr>
      <th>Operation</th>
      <th>Description</th>
      <th>Parameters</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>get</code></td>
      <td>Retrieve records</td>
      <td><code>filter</code>, <code>select</code>, <code>top</code>, <code>skip</code></td>
      <td><code>filter: "Name eq 'Test'"</code></td>
    </tr>
    <tr>
      <td><code>create</code></td>
      <td>Create new record</td>
      <td><code>body</code></td>
      <td><code>body: {"Name": "Test"}</code></td>
    </tr>
    <tr>
      <td><code>update</code></td>
      <td>Update record</td>
      <td><code>recordId</code>, <code>body</code></td>
      <td><code>recordId: "123"</code></td>
    </tr>
    <tr>
      <td><code>delete</code></td>
      <td>Delete record</td>
      <td><code>recordId</code></td>
      <td><code>recordId: "123"</code></td>
    </tr>
    <tr>
      <td><code>getById</code></td>
      <td>Get single record by ID</td>
      <td><code>recordId</code>, <code>select</code></td>
      <td><code>recordId: "123"</code></td>
    </tr>
  </tbody>
</table>

### 🔍 Filter Options (OData Syntax)

```javascript
// Equality
"Name eq 'Contoso'"

// Comparisons
"UnitPrice gt 100"
"UnitPrice lt 50"
"UnitPrice ge 100"
"UnitPrice le 50"

// Date/Time
"CreatedDate ge 2024-01-01T00:00:00Z"

// String functions
"contains(Name, 'Ltd')"
"startswith(Name, 'Con')"
"endswith(Name, 'Ltd')"

// Logical operators
"Name eq 'Contoso' and UnitPrice gt 100"
"Name eq 'Contoso' or Name eq 'Fabrikam'"
```

---

## 🤝 Contributing

<div align="center">
  <img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge" alt="Contributions Welcome">
</div>

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before creating a pull request.

### 🚀 Development Guidelines

1. **Fork** the repository
2. **Create branch** (`git checkout -b feature/new-feature`)
3. **Commit changes** (`git commit -am 'Add new feature'`)
4. **Push to branch** (`git push origin feature/new-feature`)
5. **Create Pull Request**

### 📊 Project Status

![GitHub issues](https://img.shields.io/github/issues/[your-username]/n8n-msdyn365bc?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/[your-username]/n8n-msdyn365bc?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/[your-username]/n8n-msdyn365bc?style=flat-square)

---

## 📝 License

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
</div>

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🐛 Bug Reports & Feature Requests

<div align="center">
  <a href="https://github.com/[your-username]/n8n-msdyn365bc/issues/new?template=bug_report.md">
    <img src="https://img.shields.io/badge/🐛%20Bug%20Report-Report%20Issue-red?style=for-the-badge" alt="Bug Report">
  </a>
  <a href="https://github.com/[your-username]/n8n-msdyn365bc/issues/new?template=feature_request.md">
    <img src="https://img.shields.io/badge/💡%20Feature%20Request-Request%20Feature-blue?style=for-the-badge" alt="Feature Request">
  </a>
</div>

**Use GitHub Issues for:**
- 🐛 Bug Reports
- 💡 Feature Requests
- ❓ Usage Questions
- 📚 Documentation Improvements

---

## 📚 Resources & Links

### 📖 Documentation

- 📘 [Microsoft Business Central API Documentation](https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
- 📗 [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- 📙 [OData Query Options](https://www.odata.org/getting-started/basic-tutorial/#queryData)

### 🔗 Related Projects

- [n8n](https://github.com/n8n-io/n8n) - The main n8n project
- [Microsoft Business Central](https://dynamics.microsoft.com/en-us/business-central/) - Official Business Central

---

## 📞 Support

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://img.shields.io/badge/📧%20E--Mail-support%40ktc.de-blue?style=for-the-badge" alt="E-Mail Support">
      </td>
      <td align="center">
        <a href="https://ktc.de">
          <img src="https://img.shields.io/badge/🌐%20Website-www.ktc.de-green?style=for-the-badge" alt="Website">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/[your-username]/n8n-msdyn365bc/issues">
          <img src="https://img.shields.io/badge/🐛%20GitHub-Issues-red?style=for-the-badge" alt="GitHub Issues">
        </a>
      </td>
    </tr>
  </table>
</div>

### 🕐 Support Hours

- **Community Support**: 24/7 via GitHub Issues
- **Professional Support**: Mon-Fri 9:00-17:00 CET
- **Enterprise Support**: Available by arrangement

---

<div align="center">
  <br>
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love">
  <br><br>
  <strong>⭐ If you like this project, give us a star on GitHub! ⭐</strong>
  <br><br>
  <img src="https://img.shields.io/github/stars/[your-username]/n8n-msdyn365bc?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/[your-username]/n8n-msdyn365bc?style=social" alt="GitHub Forks">
</div>

---

> **📝 Note**: This project is a community node and is not officially supported by Microsoft or n8n. It is developed and maintained by the community.
