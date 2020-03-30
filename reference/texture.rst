.. _api_Texture:
Texture Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Texture_description:
Description
-----------

Texture resource contains all necessary texture data.

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:
Public Methods
--------------

+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                                           | :ref:`Texture<api_Texture_Texture>` ()                                              |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                                           | :ref:`~Texture<api_Texture_~Texture>` ()                                            |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`addSurface<api_Texture_addSurface>` (const Texture::Surface & surface)        |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
| :ref:`Texture::FilteringType<api_Texture::FilteringType>` | :ref:`filtering<api_Texture_filtering>` () const                                    |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|       :ref:`Texture::FormatType<api_Texture::FormatType>` | :ref:`format<api_Texture_format>` () const                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`getPixel<api_Texture_getPixel>` (in  int) const                               |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`height<api_Texture_height>` () const                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`bool<api_bool>` | :ref:`isCompressed<api_Texture_isCompressed>` () const                              |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`bool<api_bool>` | :ref:`isCubemap<api_Texture_isCubemap>` () const                                    |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`readPixels<api_Texture_readPixels>` (int  x, int  y, int  width, int  height) |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`resize<api_Texture_resize>` (int  width, int  height)                         |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setDirty<api_Texture_setDirty>` ()                                            |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFiltering<api_Texture_setFiltering>` (Texture::FilteringType  type)        |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFormat<api_Texture_setFormat>` (Texture::FormatType  type)                 |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setHeight<api_Texture_setHeight>` (int  height)                               |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setShape<api_Texture_setShape>` (const Vector2Vector & shape)                 |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setWidth<api_Texture_setWidth>` (int  width)                                  |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setWrap<api_Texture_setWrap>` (Texture::WrapType  type)                       |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                   :ref:`Vector2Vector<api_Vector2Vector>` | :ref:`shape<api_Texture_shape>` () const                                            |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|           :ref:`Texture::Surface<api_Texture::Surface>` & | :ref:`surface<api_Texture_surface>` (int  face)                                     |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`width<api_Texture_width>` () const                                            |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+
|           :ref:`Texture::WrapType<api_Texture::WrapType>` | :ref:`wrap<api_Texture_wrap>` () const                                              |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------+

.. _api_Texture_static:
Static Methods
--------------

None

.. _api_Texture_methods:
Methods Description
-------------------

.. _api_Texture_Texture:

**Texture::Texture** ()

Default constructs an instance of Texture.

----

.. _api_Texture_~Texture:

**Texture::~Texture** ()

Destroys the instance of Texture. The destructor is virtual.

----

.. _api_Texture_addSurface:

:ref:`void<api_void>`  **Texture::addSurface** (:ref:`Texture::Surface<api_Texture::Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one *surface*. Commonly used to set *surface*s for the cube maps.

----

.. _api_Texture_filtering:

:ref:`Texture::FilteringType<api_Texture::FilteringType>`  **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_format:

:ref:`Texture::FormatType<api_Texture::FormatType>`  **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_getPixel:

:ref:`int<api_int>`  **Texture::getPixel** (:ref:`in<api_in>`  *int*) const

Returns pixel color as RGBA *int*eger for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_height:

:ref:`int<api_int>`  **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_isCompressed:

:ref:`bool<api_bool>`  **Texture::isCompressed** () const

Returns true if texture uses one of the compression formats; otherwise returns false.

----

.. _api_Texture_isCubemap:

:ref:`bool<api_bool>`  **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_readPixels:

:ref:`void<api_void>`  **Texture::readPixels** (:ref:`int<api_int>`  *x*, :ref:`int<api_int>`  *y*, :ref:`int<api_int>`  *width*, :ref:`int<api_int>`  *height*)

Read pixels from GPU into texture data.

----

.. _api_Texture_resize:

:ref:`void<api_void>`  **Texture::resize** (:ref:`int<api_int>`  *width*, :ref:`int<api_int>`  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_setDirty:

:ref:`void<api_void>`  **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_setFiltering:

:ref:`void<api_void>`  **Texture::setFiltering** (:ref:`Texture::FilteringType<api_Texture::FilteringType>`  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_setFormat:

:ref:`void<api_void>`  **Texture::setFormat** (:ref:`Texture::FormatType<api_Texture::FormatType>`  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_setHeight:

:ref:`void<api_void>`  **Texture::setHeight** (:ref:`int<api_int>`  *height*)

Sets new *height* for the texture.

**See also** *height*().

----

.. _api_Texture_setShape:

:ref:`void<api_void>`  **Texture::setShape** (:ref:`Vector2Vector<api_Vector2Vector>` & *shape*)

Sets the bounding *shape* for the texture.

**See also** *shape*().

----

.. _api_Texture_setWidth:

:ref:`void<api_void>`  **Texture::setWidth** (:ref:`int<api_int>`  *width*)

Sets new *width* for the texture.

**See also** *width*().

----

.. _api_Texture_setWrap:

:ref:`void<api_void>`  **Texture::setWrap** (:ref:`Texture::WrapType<api_Texture::WrapType>`  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_shape:

:ref:`Vector2Vector<api_Vector2Vector>`  **Texture::shape** () const

Returns the bounding shape for the texture.

**See also** setShape().

----

.. _api_Texture_surface:

:ref:`Texture::Surface<api_Texture::Surface>` & **Texture::surface** (:ref:`int<api_int>`  *face*)

Returns a surface for the provided *face*. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_width:

:ref:`int<api_int>`  **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_wrap:

:ref:`Texture::WrapType<api_Texture::WrapType>`  **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().

----


