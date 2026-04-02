.. _api_Variant:

Variant
=======

Inherited: None

.. _api_Variant_description:

Description
-----------

Variant can contain values with common data types and return information about this types. Also Variant can convert cantained values to another data types using MetaType::convert function. Example:

::

    Variant variant; // This variant invalid for now
    variant     = Variant(true); // Now varinat contain boolean true value
    variant     = Variant(42); // Now varinat contain integer 42 value
    string str  = variant.toString() + " is the answer for everything"; // Now string contain string "42 is the answer for everything" value

Object based classes can be automatically registered in meta type system to be using as Variant objects. Example:

::

    MyObject::registerClassFactory();

And then:

::

    MyObject *origin = new MyObject;
    Variant variant = Variant::fromValue(origin);
    ....
    MyObject *object = variant.value<MyObject *>();



.. _api_Variant_public:

Public Methods
--------------

+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_3d8be694>` ()                               |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_3e708d26>` (MetaType::Type  type)           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_0ca8db9e>` (bool  value)                    |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_47d0e1b5>` (const ByteArray & value)        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_a82c956d>` (const Matrix3 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_458f7d6b>` (const Matrix4 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_fe32a05d>` (const Quaternion & value)       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_fe7c128b>` (const TString & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_e9f37d0b>` (const VariantList & value)      |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_8f3a9756>` (const VariantMap & value)       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_c259d384>` (const Vector2 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_a0db14f2>` (const Vector3 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_a82c1ef5>` (const Vector4 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_91fda85e>` (const char * value)             |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_bcae0692>` (float  value)                   |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_8ea5c9b1>` (int  value)                     |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_b7ed8c32>` (unsigned int  value)            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_5ad4b7f3>` (uint32_t  type, void * copy)    |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_e7c4b865>` (const Variant & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|              template <typename T> bool | :ref:`canConvert<api_Variant_7389fc4a>` () const                      |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`canConvert<api_Variant_458db0f1>` (uint32_t  type) const        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    void | :ref:`clear<api_Variant_28f1546b>` ()                                 |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`convert<api_Variant_fac80734>` (uint32_t  type)                 |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    void | :ref:`data<api_Variant_6a024839>` () const                            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`isValid<api_Variant_642c75f3>` () const                         |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`toBool<api_Variant_1326b40a>` () const                          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                         const ByteArray | :ref:`toByteArray<api_Variant_c24fa75b>` () const                     |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                   float | :ref:`toFloat<api_Variant_4a86e79d>` () const                         |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                     int | :ref:`toInt<api_Variant_f240a16e>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                       const VariantList | :ref:`toList<api_Variant_9b2de13c>` () const                          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                        const VariantMap | :ref:`toMap<api_Variant_92c580b1>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix3<api_Variant_e5d9871b>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Matrix4<api_Matrix4>` | :ref:`toMatrix4<api_Variant_035a9147>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
| const :ref:`Quaternion<api_Quaternion>` | :ref:`toQuaternion<api_Variant_73fb4ca9>` () const                    |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`TString<api_TString>` | :ref:`toString<api_Variant_dae8674f>` () const                        |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector2<api_Vector2>` | :ref:`toVector2<api_Variant_54b309f8>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector3<api_Vector3>` | :ref:`toVector3<api_Variant_54ace61d>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector4<api_Vector4>` | :ref:`toVector4<api_Variant_3b207e9c>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                uint32_t | :ref:`type<api_Variant_6f817e42>` () const                            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                uint32_t | :ref:`userType<api_Variant_6fcb1a42>` () const                        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                 template <typename T> T | :ref:`value<api_Variant_f2507863>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`operator!=<api_Variant_79c18b0f>` (const Variant & right) const |
+-----------------------------------------+-----------------------------------------------------------------------+
|           :ref:`Variant<api_Variant>` & | :ref:`operator=<api_Variant_8905f4b2>` (const Variant & value)        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`operator==<api_Variant_c94f017a>` (const Variant & right) const |
+-----------------------------------------+-----------------------------------------------------------------------+



.. _api_Variant_static:

Static Methods
--------------

+---------------------------------------------------+----------------------------------------------------------+
| template <typename T> :ref:`Variant<api_Variant>` | :ref:`fromValue<api_Variant_abc80d49>` (const T & value) |
+---------------------------------------------------+----------------------------------------------------------+

.. _api_Variant_methods:

Methods Description
-------------------

.. _api_Variant_3d8be694:

**Variant::Variant** ()

Constructs an invalid variant.

----

.. _api_Variant_3e708d26:

**Variant::Variant** (:ref:`MetaType::Type<api_MetaType_Type>`  *type*)

Constructs an uninitialized variant of type.

----

.. _api_Variant_0ca8db9e:

**Variant::Variant** (bool  *value*)

Constructs a new variant with a boolean value.

----

.. _api_Variant_47d0e1b5:

**Variant::Variant** (ByteArray & *value*)

Constructs a new variant with a ByteArray value.

----

.. _api_Variant_a82c956d:

**Variant::Variant** (:ref:`Matrix3<api_Matrix3>` & *value*)

Constructs a new variant with a Matrix3 value.

----

.. _api_Variant_458f7d6b:

**Variant::Variant** (:ref:`Matrix4<api_Matrix4>` & *value*)

Constructs a new variant with a Matrix4 value.

----

.. _api_Variant_fe32a05d:

**Variant::Variant** (:ref:`Quaternion<api_Quaternion>` & *value*)

Constructs a new variant with a Quaternion value.

----

.. _api_Variant_fe7c128b:

**Variant::Variant** (:ref:`TString<api_TString>` & *value*)

Constructs a new variant with a string value.

----

.. _api_Variant_e9f37d0b:

**Variant::Variant** (VariantList & *value*)

Constructs a new variant with a list of variants value.

----

.. _api_Variant_8f3a9756:

**Variant::Variant** (VariantMap & *value*)

Constructs a new variant with a map of variants value.

----

.. _api_Variant_c259d384:

**Variant::Variant** (:ref:`Vector2<api_Vector2>` & *value*)

Constructs a new variant with a Vector2 value.

----

.. _api_Variant_a0db14f2:

**Variant::Variant** (:ref:`Vector3<api_Vector3>` & *value*)

Constructs a new variant with a Vector3 value.

----

.. _api_Variant_a82c1ef5:

**Variant::Variant** (:ref:`Vector4<api_Vector4>` & *value*)

Constructs a new variant with a Vector4 value.

----

.. _api_Variant_91fda85e:

**Variant::Variant** (char * *value*)

Constructs a new variant with a string value.

----

.. _api_Variant_bcae0692:

**Variant::Variant** (float  *value*)

Constructs a new variant with a floating point value.

----

.. _api_Variant_8ea5c9b1:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer value.

----

.. _api_Variant_b7ed8c32:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer value.

----

.. _api_Variant_5ad4b7f3:

**Variant::Variant** (uint32_t  *type*, void * *copy*)

Constructs a new variant of *type* and initialized with *copy* value.

----

.. _api_Variant_e7c4b865:

**Variant::Variant** (:ref:`Variant<api_Variant>` & *value*)

Constructs a copy of variant value.

----

.. _api_Variant_7389fc4a:

template <typename T> bool **Variant::canConvert** () const

Returns the possibility of conversion for this variant to type T.

**See also** value and MetaType::convert.

----

.. _api_Variant_458db0f1:

 bool **Variant::canConvert** (uint32_t  *type*) const

Returns true if variant converted to a type; otherwise return false.

----

.. _api_Variant_28f1546b:

 void **Variant::clear** ()

Frees used resources and make this variant an invalid.

----

.. _api_Variant_fac80734:

 bool **Variant::convert** (uint32_t  *type*)

Casts the variant to the requested type.

Returns true if the current *type* of the variant was successfully cast; otherwise returns false.

----

.. _api_Variant_6a024839:

 void **Variant::data** () const

Returns pure pointer to value data.

----

.. _api_Variant_abc80d49:

template <typename T> :ref:`Variant<api_Variant>`  **Variant::fromValue** (T & *value*)

Returns the variant containing provided value.

Returns an invalid variant if unknown *value* type.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_642c75f3:

 bool **Variant::isValid** () const

Returns true if variant value is valid; otherwise return false.

----

.. _api_Variant_1326b40a:

 bool **Variant::toBool** () const

Returns variant as a bool value if variant has a type MetaType::BOOLEAN. Otherwise it tries to convert existing value to a bool.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_c24fa75b:

const ByteArray **Variant::toByteArray** () const

Returns variant as a ByteArray value if variant has a type MetaType::BYTEARRAY. Otherwise it tries to convert existing value to a ByteArray.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_4a86e79d:

 float **Variant::toFloat** () const

Returns variant as a float value if variant has a type MetaType::FLOAT. Otherwise it tries to convert existing value to a float.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_f240a16e:

 int **Variant::toInt** () const

Returns variant as an integer value if variant has a type MetaType::INTEGER. Otherwise it tries to convert existing value to an integer.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_9b2de13c:

const VariantList **Variant::toList** () const

Returns variant as a variant list value if variant has a type MetaType::VARIANTLIST. Otherwise it tries to convert existing value to a variant list.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_92c580b1:

const VariantMap **Variant::toMap** () const

Returns variant as a variant map value if variant has a type MetaType::VARIANTMAP. Otherwise it tries to convert existing value to a variant map.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_e5d9871b:

const :ref:`Matrix3<api_Matrix3>`  **Variant::toMatrix3** () const

Returns variant as a Matrix3 value if variant has a type MetaType::MATRIX3. Otherwise it tries to convert existing value to a Matrix3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_035a9147:

const :ref:`Matrix4<api_Matrix4>`  **Variant::toMatrix4** () const

Returns variant as a Matrix4 value if variant has a type MetaType::MATRIX4. Otherwise it tries to convert existing value to a Matrix4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_73fb4ca9:

const :ref:`Quaternion<api_Quaternion>`  **Variant::toQuaternion** () const

Returns variant as a Quaternion value if variant has a type MetaType::QUATERNION. Otherwise it tries to convert existing value to a Quaternion.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_dae8674f:

const :ref:`TString<api_TString>`  **Variant::toString** () const

Returns variant as a string value if variant has a type MetaType::STRING. Otherwise it tries to convert existing value to a string.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_54b309f8:

const :ref:`Vector2<api_Vector2>`  **Variant::toVector2** () const

Returns variant as a Vector2 value if variant has a type MetaType::VECTOR2. Otherwise it tries to convert existing value to a Vector2.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_54ace61d:

const :ref:`Vector3<api_Vector3>`  **Variant::toVector3** () const

Returns variant as a Vector3 value if variant has a type MetaType::VECTOR3. Otherwise it tries to convert existing value to a Vector3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_3b207e9c:

const :ref:`Vector4<api_Vector4>`  **Variant::toVector4** () const

Returns variant as a Vector4 value if variant has a type MetaType::VECTOR4. Otherwise it tries to convert existing value to a Vector4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_6f817e42:

 uint32_t **Variant::type** () const

Returns type of variant value.


**Note:** If type of variant is user defined then fonction return MetaType::USERTYPE. To get the real type id use userType.


**See also** userType.

----

.. _api_Variant_6fcb1a42:

 uint32_t **Variant::userType** () const

Returns user type of variant value.

**See also** type.

----

.. _api_Variant_f2507863:

template <typename T> T **Variant::value** () const

Returns contained value which cast or converted to type T.

Returns default T value if invalid variant or variant can not be converted to type T.

**See also** fromValue, canConvert, and MetaType::convert.

----

.. _api_Variant_79c18b0f:

 bool **Variant::operator!=** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are NOT equal; otherwise returns false.

----

.. _api_Variant_8905f4b2:

 :ref:`Variant<api_Variant>` & **Variant::operator=** (:ref:`Variant<api_Variant>` & *value*)

Assigns the *value* of the variant to this variant.

----

.. _api_Variant_c94f017a:

 bool **Variant::operator==** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are equal; otherwise returns false.


