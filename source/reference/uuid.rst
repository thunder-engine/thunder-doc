.. _api_Uuid:

Uuid
====

Inherited: None

.. _api_Uuid_description:

Description
-----------

`Uuid` represents a 128-bit UUID (RFC 4122 compatible). It provides utilities to create random (version 4) UUIDs, convert to/from string and byte array representations, and basic comparison operators.



.. _api_Uuid_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------+
|                              | :ref:`Uuid<api_Uuid_cbda358f>` ()                                 |
+------------------------------+-------------------------------------------------------------------+
|                              | :ref:`Uuid<api_Uuid_e6a7f2bd>` (const TString & uuid)             |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`fromByteArray<api_Uuid_071ea68c>` (const ByteArray & array) |
+------------------------------+-------------------------------------------------------------------+
|                         bool | :ref:`isNull<api_Uuid_8efcb560>` () const                         |
+------------------------------+-------------------------------------------------------------------+
|                    ByteArray | :ref:`toByteArray<api_Uuid_8d017639>` () const                    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`toString<api_Uuid_47abde98>` () const                       |
+------------------------------+-------------------------------------------------------------------+
|                         bool | :ref:`operator!=<api_Uuid_1f405c27>` (const Uuid & other) const   |
+------------------------------+-------------------------------------------------------------------+
|                         bool | :ref:`operator\<<api_Uuid_92e6103f>` (const Uuid & other) const   |
+------------------------------+-------------------------------------------------------------------+
|                         bool | :ref:`operator==<api_Uuid_76f2543c>` (const Uuid & other) const   |
+------------------------------+-------------------------------------------------------------------+



.. _api_Uuid_static:

Static Methods
--------------

+------------------------+-----------------------------------------+
|  :ref:`Uuid<api_Uuid>` | :ref:`createUuid<api_Uuid_90247b1f>` () |
+------------------------+-----------------------------------------+

.. _api_Uuid_methods:

Methods Description
-------------------

.. _api_Uuid_cbda358f:

**Uuid::Uuid** ()

The internal 16-byte value is zero-initialized.

----

.. _api_Uuid_e6a7f2bd:

**Uuid::Uuid** (:ref:`TString<api_TString>` & *uuid*)

Construct a *uuid* from its textual representation.

Accepts common UUID formats with or without braces and dashes (for example: `{550e8400-e29b-41d4-a716-446655440000}` or `550e8400e29b41d4a716446655440000`). Non-hex characters except for separators are ignored. If the input contains fewer than 16 bytes, the remaining bytes stay zero.

----

.. _api_Uuid_90247b1f:

 :ref:`Uuid<api_Uuid>`  **Uuid::createUuid** ()

Generate a random (version 4) UUID.

Uses a C++ random device and Mersenne Twister generator to produce 16 random bytes. Sets version and variant bits according to RFC 4122.

----

.. _api_Uuid_071ea68c:

 void **Uuid::fromByteArray** (ByteArray & *array*)

Load UUID bytes from a 16-byte ByteArray.

The provided *array* is expected to contain at least 16 bytes.

----

.. _api_Uuid_8efcb560:

 bool **Uuid::isNull** () const

Returns true if UUID is the null UUID (all bytes zero).

----

.. _api_Uuid_8d017639:

 ByteArray **Uuid::toByteArray** () const

Convert the UUID to a 16-byte ByteArray.

----

.. _api_Uuid_47abde98:

 :ref:`TString<api_TString>`  **Uuid::toString** () const

Return the canonical string representation of the UUID.

The returned string is formatted with braces and hyphens, e.g. `{550e8400-e29b-41d4-a716-446655440000}`.

----

.. _api_Uuid_1f405c27:

 bool **Uuid::operator!=** (:ref:`Uuid<api_Uuid>` & *other*) const

Inequality comparison with *other* UUIDs. Returns true if the UUIDs are different; otherwise returns false.

----

.. _api_Uuid_92e6103f:

 bool **Uuid::operator<** (:ref:`Uuid<api_Uuid>` & *other*) const

Ordering with *other* UUID (lexicographical by bytes). Returns true if this UUID is lexicographically less than other; otherwise returns false.

----

.. _api_Uuid_76f2543c:

 bool **Uuid::operator==** (:ref:`Uuid<api_Uuid>` & *other*) const

Equality comparison with *other* UUID. Returns true if the UUIDs are equal; otherwise returns false.


