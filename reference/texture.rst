.. _api_Texture:
Texture Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Texture_description:
Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:
Public Methods
--------------

+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`addSurface<api_Texture_addSurface>` (const Texture::Surface & surface)        |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`depthBits<api_Texture_depthBits>` () const                                    |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`filtering<api_Texture_filtering>` () const                                    |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`format<api_Texture_format>` () const                                          |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`getPixel<api_Texture_getPixel>` (int  x, int  y) const                        |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`height<api_Texture_height>` () const                                          |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`isArray<api_Texture_isArray>` () const                                        |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`isCompressed<api_Texture_isCompressed>` () const                              |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`isCubemap<api_Texture_isCubemap>` () const                                    |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`readPixels<api_Texture_readPixels>` (int  x, int  y, int  width, int  height) |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`resize<api_Texture_resize>` (int  width, int  height)                         |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setDepthBits<api_Texture_setDepthBits>` (int  depth)                          |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setDirty<api_Texture_setDirty>` ()                                            |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setFiltering<api_Texture_setFiltering>` (int  type)                           |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setFormat<api_Texture_setFormat>` (int  type)                                 |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setHeight<api_Texture_setHeight>` (int  height)                               |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setWidth<api_Texture_setWidth>` (int  width)                                  |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setWrap<api_Texture_setWrap>` (int  type)                                     |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
| :ref:`Texture::Surface<api_Texture::Surface>` & | :ref:`surface<api_Texture_surface>` (int  face)                                     |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`width<api_Texture_width>` () const                                            |
+-------------------------------------------------+-------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`wrap<api_Texture_wrap>` () const                                              |
+-------------------------------------------------+-------------------------------------------------------------------------------------+

.. _api_Texture_enums:
Public Enums
--------------

.. _api_Texture_FilteringType:
**enum Texture::FilteringType**

+--------------------+-------+---------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|      Texture::None | 0     | Texture samples draw as is.                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|  Texture::Bilinear | 1     | Texture samples are averaged.                                                   |
+--------------------+-------+---------------------------------------------------------------------------------+
| Texture::Trilinear | 2     | Texture samples are averaged and also interpolated from adjacent mipmap levels. |
+--------------------+-------+---------------------------------------------------------------------------------+

.. _api_Texture_FormatType:
**enum Texture::FormatType**

+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|                Constant | Value | Description                                                                                                                              |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|             Texture::R8 | 0     | Single channel(Red) texture. 8-bit integer                                                                                               |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|           Texture::RGB8 | 1     | Color texture format. 8 bit integer per channel. 24-bits in total.                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::RGBA8 | 2     | Color texture format with alpha channel. 8-bit integer per channel. 32-bits in total.                                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|        Texture::RGB10A2 | 3     | 10 bits each for RGB, 2 for Alpha.                                                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|     Texture::RGB16Float | 4     | Color texture with floating-point values. It uses 16-bit floating-point values per channel.                                              |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA32Float | 7     | Color texture and alpha with floating-point values. It uses 32-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
| Texture::R11G11B10Float | 5     | This uses special 11 and 10-bit floating-point values. This is very economical for floating-point values (using only 32-bits per value). |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::Depth | 6     | Depth buffer texture format. Number bits per pixel depend on graphical settings and hardware. Can be 16, 24 or 32-bit per pixel.         |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Texture_WrapType:
**enum Texture::WrapType**

Wrap mode for textures.

+-------------------+-------+--------------------------------------------------------------------------------------------+
|          Constant | Value | Description                                                                                |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|    Texture::Clamp | 0     | Clamps the texture to the last pixel at the edge.                                          |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|   Texture::Repeat | 1     | Tiles the texture, creating a repeating pattern.                                           |
+-------------------+-------+--------------------------------------------------------------------------------------------+
| Texture::Mirrored | 2     | Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. |
+-------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_Texture_static:
Static Methods
--------------

None

.. _api_Texture_methods:
Methods Description
-------------------

.. _api_Texture_addSurface:

:ref:`void<api_void>`  **Texture::addSurface** (:ref:`Texture::Surface<api_Texture::Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one *surface*. Commonly used to set *surface*s for the cube maps.

----

.. _api_Texture_depthBits:

:ref:`int<api_int>`  **Texture::depthBits** () const

Returns the number of depth bits.

**Note:** This value is valid only for the depth textures.

**See also** setDepthBits().

----

.. _api_Texture_filtering:

:ref:`int<api_int>`  **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_format:

:ref:`int<api_int>`  **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_getPixel:

:ref:`int<api_int>`  **Texture::getPixel** (:ref:`int<api_int>`  *x*, :ref:`int<api_int>`  *y*) const

Returns pixel color at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_height:

:ref:`int<api_int>`  **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_isArray:

:ref:`bool<api_bool>`  **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.

**Note:** For now will always return false.

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

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_resize:

:ref:`void<api_void>`  **Texture::resize** (:ref:`int<api_int>`  *width*, :ref:`int<api_int>`  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_setDepthBits:

:ref:`void<api_void>`  **Texture::setDepthBits** (:ref:`int<api_int>`  *depth*)

Sets the number of *depth* bits.

**Note:** This value is valid only for the *depth* textures.

**See also** *depth*Bits().

----

.. _api_Texture_setDirty:

:ref:`void<api_void>`  **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_setFiltering:

:ref:`void<api_void>`  **Texture::setFiltering** (:ref:`int<api_int>`  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_setFormat:

:ref:`void<api_void>`  **Texture::setFormat** (:ref:`int<api_int>`  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_setHeight:

:ref:`void<api_void>`  **Texture::setHeight** (:ref:`int<api_int>`  *height*)

Sets new *height* for the texture.

**See also** *height*().

----

.. _api_Texture_setWidth:

:ref:`void<api_void>`  **Texture::setWidth** (:ref:`int<api_int>`  *width*)

Sets new *width* for the texture.

**See also** *width*().

----

.. _api_Texture_setWrap:

:ref:`void<api_void>`  **Texture::setWrap** (:ref:`int<api_int>`  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

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

:ref:`int<api_int>`  **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().

----


