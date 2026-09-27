.. _api_NetworkAddress:

NetworkAddress
==============

Inherited: None

.. _api_NetworkAddress_description:

Description
-----------

The NetworkAddress class provides a way to represent an IP address and its associated port. It supports initialization via raw values (IP address in integer format or string format), and provides methods for comparison, conversion, and retrieval of IP address and port information.



.. _api_NetworkAddress_public:

Public Methods
--------------

+-----------+----------------------------------------------------------------------------------------------+
|           | :ref:`NetworkAddress<api_NetworkAddress_7efbc369>` ()                                        |
+-----------+----------------------------------------------------------------------------------------------+
|           | :ref:`NetworkAddress<api_NetworkAddress_37c128d9>` (uint32_t  address, uint16_t  port)       |
+-----------+----------------------------------------------------------------------------------------------+
|           | :ref:`NetworkAddress<api_NetworkAddress_67fcb341>` (const TString & address, uint16_t  port) |
+-----------+----------------------------------------------------------------------------------------------+
|  uint16_t | :ref:`port<api_NetworkAddress_aedf6097>` () const                                            |
+-----------+----------------------------------------------------------------------------------------------+
|  uint32_t | :ref:`toIPv4Adress<api_NetworkAddress_d1f2ba08>` () const                                    |
+-----------+----------------------------------------------------------------------------------------------+
|      bool | :ref:`operator!=<api_NetworkAddress_ea5b08fc>` (const NetworkAddress & right) const          |
+-----------+----------------------------------------------------------------------------------------------+
|      bool | :ref:`operator\<<api_NetworkAddress_70df31b9>` (const NetworkAddress & right) const          |
+-----------+----------------------------------------------------------------------------------------------+
|      bool | :ref:`operator==<api_NetworkAddress_d12cf80a>` (const NetworkAddress & right) const          |
+-----------+----------------------------------------------------------------------------------------------+



.. _api_NetworkAddress_static:

Static Methods
--------------

None

.. _api_NetworkAddress_methods:

Methods Description
-------------------

.. _api_NetworkAddress_7efbc369:

**NetworkAddress::NetworkAddress** ()

Default constructor that initializes the address to 0 and port to 0.

----

.. _api_NetworkAddress_37c128d9:

**NetworkAddress::NetworkAddress** (uint32_t  *address*, uint16_t  *port*)

Constructor that initializes the NetworkAddress with the provided IP *address* and port.

----

.. _api_NetworkAddress_67fcb341:

**NetworkAddress::NetworkAddress** (:ref:`TString<api_TString>` & *address*, uint16_t  *port*)

Constructor that initializes the NetworkAddress using a string representation of the IP *address* (either hostname or numeric IP address) and the specified port.

----

.. _api_NetworkAddress_aedf6097:

 uint16_t **NetworkAddress::port** () const

Returns the port number stored in the NetworkAddress object.

----

.. _api_NetworkAddress_d1f2ba08:

 uint32_t **NetworkAddress::toIPv4Adress** () const

Returns the IP address stored in the NetworkAddress object as a uint32_t value.

----

.. _api_NetworkAddress_ea5b08fc:

 bool **NetworkAddress::operator!=** (:ref:`NetworkAddress<api_NetworkAddress>` & *right*) const

Compares a this NetworkAddress with NetworkAddress *right* object. Returns false if addresses are equal; otherwise returns true.

----

.. _api_NetworkAddress_70df31b9:

 bool **NetworkAddress::operator<** (:ref:`NetworkAddress<api_NetworkAddress>` & *right*) const

Compares this NetworkAddress with *right* object to determine if the current object is "less than" the provided object based on the IP address alone. Returns true if the address is less than right; otherwise returns false.

----

.. _api_NetworkAddress_d12cf80a:

 bool **NetworkAddress::operator==** (:ref:`NetworkAddress<api_NetworkAddress>` & *right*) const

Compares a this NetworkAddress with NetworkAddress *right* object. Returns true if addresses are equal; otherwise returns false.


