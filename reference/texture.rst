.. _api_Texture:

Texture Class
=============

Inherited: :doc:`Resource<api_Resource>`

.. _api_Texture_description:

Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:

Public Methods
--------------

+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`addSurface<api_Texture_addSurface>` (const Texture::Surface & surface)        |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`depthBits<api_Texture_depthBits>` () const                                    |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`filtering<api_Texture_filtering>` () const                                    |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`format<api_Texture_format>` () const                                          |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`getPixel<api_Texture_getPixel>` (int  x, int  y, int  level) const            |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                  :ref:`ByteArray<api_ByteArray>` | :ref:`getPixels<api_Texture_getPixels>` (int  level) const                          |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`height<api_Texture_height>` () const                                          |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             bool | :ref:`isArray<api_Texture_isArray>` () const                                        |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             bool | :ref:`isCompressed<api_Texture_isCompressed>` () const                              |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             bool | :ref:`isCubemap<api_Texture_isCubemap>` () const                                    |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             bool | :ref:`isFramebuffer<api_Texture_isFramebuffer>` () const                            |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`readPixels<api_Texture_readPixels>` (int  x, int  y, int  width, int  height) |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`resize<api_Texture_resize>` (int  width, int  height)                         |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setDepthBits<api_Texture_setDepthBits>` (int  depth)                          |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setDirty<api_Texture_setDirty>` ()                                            |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setFiltering<api_Texture_setFiltering>` (int  type)                           |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setFormat<api_Texture_setFormat>` (int  type)                                 |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setHeight<api_Texture_setHeight>` (int  height)                               |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setWidth<api_Texture_setWidth>` (int  width)                                  |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                             void | :ref:`setWrap<api_Texture_setWrap>` (int  type)                                     |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`Texture::Surface<api_Texture::Surface>` & | :ref:`surface<api_Texture_surface>` (int  face)                                     |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`width<api_Texture_width>` () const                                            |
+--------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              int | :ref:`wrap<api_Texture_wrap>` () const                                              |
+--------------------------------------------------+-------------------------------------------------------------------------------------+

.. _api_Texture_enums:

Public Enums
------------

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
|    Texture::RGBA32Float | 6     | Color texture and alpha with floating-point values. It uses 32-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
| Texture::R11G11B10Float | 4     | This uses special 11 and 10-bit floating-point values. This is very economical for floating-point values (using only 32-bits per value). |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::Depth | 5     | Depth buffer texture format. Number bits per pixel depend on graphical settings and hardware. Can be 16, 24 or 32-bit per pixel.         |
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

+------+------------------------------------------------------+
|  int | :ref:`maxCubemapSize<api_Texture_maxCubemapSize>` () |
+------+------------------------------------------------------+
|  int | :ref:`maxTextureSize<api_Texture_maxTextureSize>` () |
+------+------------------------------------------------------+

.. _api_Texture_methods:

Methods Description
-------------------

.. _api_Texture_addSurface:

 void **Texture::addSurface** (:ref:`Texture::Surface<api_Texture::Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one *surface*. Commonly used to set *surface*s for the cube maps.

----

.. _api_Texture_depthBits:

 int **Texture::depthBits** () const

Returns the number of depth bits.

**Note:** This value is valid only for the depth textures.

**See also** setDepthBits().

----

.. _api_Texture_filtering:

 int **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_format:

 int **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_getPixel:

 int **Texture::getPixel** (int  *x*, int  *y*, int  *level*) const

Returns pixel color from mip *level* at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_getPixels:

 :ref:`ByteArray<api_ByteArray>` **Texture::getPixels** (int  *level*) const

Returns texture data from a mip *level*.

----

.. _api_Texture_height:

 int **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_isArray:

 bool **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.

**Note:** For now will always return false.

----

.. _api_Texture_isCompressed:

 bool **Texture::isCompressed** () const

Returns true if texture uses one of the compression formats; otherwise returns false.

----

.. _api_Texture_isCubemap:

 bool **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_isFramebuffer:

 bool **Texture::isFramebuffer** () const

Returns true if texture is attechecd to framebuffer; otherwise returns false.

----

.. _api_Texture_maxCubemapSize:

 int **Texture::maxCubemapSize** ()

Returns the maximum cubemap size.

----

.. _api_Texture_maxTextureSize:

 int **Texture::maxTextureSize** ()

Returns the maximum texure size.

----

.. _api_Texture_readPixels:

 void **Texture::readPixels** (int  *x*, int  *y*, int  *width*, int  *height*)

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_resize:

 void **Texture::resize** (int  *width*, int  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_setDepthBits:

 void **Texture::setDepthBits** (int  *depth*)

Sets the number of *depth* bits.

**Note:** This value is valid only for the *depth* textures.

**See also** *depth*Bits().

----

.. _api_Texture_setDirty:

 void **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_setFiltering:

 void **Texture::setFiltering** (int  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_setFormat:

 void **Texture::setFormat** (int  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_setHeight:

 void **Texture::setHeight** (int  *height*)

Sets new *height* for the texture.

**See also** *height*().

----

.. _api_Texture_setWidth:

 void **Texture::setWidth** (int  *width*)

Sets new *width* for the texture.

**See also** *width*().

----

.. _api_Texture_setWrap:

 void **Texture::setWrap** (int  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_surface:

 :ref:`Texture::Surface<api_Texture::Surface>`& **Texture::surface** (int  *face*)

Returns a surface for the provided *face*. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_width:

 int **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_wrap:

 int **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().


